import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http:HttpClient) { }

  loadThemes(){
    this.http.get('http://localhost:3000/api/themes');
  }
}
