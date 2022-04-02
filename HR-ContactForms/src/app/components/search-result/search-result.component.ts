import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { IGroup } from 'src/app/models/IGroup';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  // @Input()
  // contacts!: IContact[];

  public loading: boolean = true;
  public contacts: IContact[] = [];
  public group: IGroup = {} as IGroup;
  public groups: IGroup[] = [] as IGroup[];
  public contactId: string | null = null;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      // this.activatedRoute.paramMap.subscribe({
      //   next: (param: ParamMap) => { this.contactId = param.get('contactId') },
      // });

      // this.contactService.getAllContacts().subscribe({
      //   next: (data: IContact[]) => { this.contacts = data; this.loading = false },
      //   error: (error) => { this.errorMessage = error; this.loading = false },
      // });
      // this.contacts = this.state$

      // localStorage['data'].forEach((x: any) => {
      //   this.contacts.push(of(x : IContact))
      // });
      // this.contacts = localStorage['data'];

      // console.log(Array.from(localStorage['data']).forEach(console.log));

      // console.log(localStorage['data']);
      // console.log(sessionStorage['data']);
      // console.log(JSON.parse(sessionStorage['data']));

      this.contacts = JSON.parse(sessionStorage['data']);
      this.loading = false;

    }, 1000);
  }

  public clickDeleteContact(contactId: string) {
    this.contactService.deleteContact(contactId).subscribe({
      // next: (data: IContact[]) => { this.contacts = data; this.loading = false },
      // error: (error) => { this.errorMessage = error; this.loading = false },
    });
  }
}
