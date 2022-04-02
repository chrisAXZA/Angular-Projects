import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IGroup } from '../models/IGroup';
import { IContact } from '../models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string = 'http://localhost:9000';

  constructor(private httpClient: HttpClient) { }

  public getAllContacts(): Observable<IContact[]> {
    let dataURL: string = `${this.serverUrl}/contacts`;

    return this.httpClient
      .get<IContact[]>(dataURL)
      .pipe(catchError(this.handleError));
  }

  public getAllSearchContacts(searchTerm: string): Observable<IContact[]> {
    let dataURL: string = `${this.serverUrl}/contacts`;

    return this.httpClient
      .get<IContact[]>(dataURL)
      .pipe(map(data => {
        const tempData: IContact[] = [];
        data.forEach(d => {
          if (d.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            tempData.push(d);
          }
        })
        return tempData;
      }),
        catchError(this.handleError));
  }

  public getContact(contactId: string): Observable<IContact> {
    let dataURL: string = `${this.serverUrl}/contacts/${contactId}`;

    return this.httpClient
      .get<IContact>(dataURL)
      .pipe(catchError(this.handleError));
  }

  public createContact(contact: IContact): Observable<IContact> {
    let dataURL: string = `${this.serverUrl}/contacts`;

    return this.httpClient
      .post<IContact>(dataURL, contact)
      .pipe(catchError(this.handleError));
  }

  public updateContact(contact: IContact, contactId: string): Observable<IContact> {
    let dataURL: string = `${this.serverUrl}/contacts/${contactId}`;

    return this.httpClient
      .put<IContact>(dataURL, contact)
      .pipe(catchError(this.handleError));
  }

  public deleteContact(contactId: string): Observable<{}> {
    let dataURL: string = `${this.serverUrl}/contacts/${contactId}`;

    return this.httpClient
      .delete<{}>(dataURL)
      .pipe(catchError(this.handleError));
  }

  public getAllGroups(): Observable<IGroup[]> {
    let dataURL: string = `${this.serverUrl}/groups`;

    return this.httpClient
      .get<IGroup[]>(dataURL)
      .pipe(catchError(this.handleError));
  }

  public getGroup(contact: IContact): Observable<IGroup> {
    let dataURL: string = `${this.serverUrl}/groups/${contact.groupId}`;

    return this.httpClient
      .get<IGroup>(dataURL)
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';

    if (error.error instanceof ErrorEvent) {
      // client Error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }

    return throwError(() => errorMessage);

    // const err = new Error(errorMessage);
    // return throwError(() => err);
  }
}
