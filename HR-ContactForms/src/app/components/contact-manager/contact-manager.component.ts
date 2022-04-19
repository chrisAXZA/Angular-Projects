import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  public loading: boolean = true;
  public contacts: IContact[] = [];
  public errorMessage: string | null = null;
  public searchTerm: string | null = null;

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllContactsFromServer();
    }, 1000);

    // this.getAllContactsFromServer();

    // this.loading = true;

    // this.contactService.getAllContacts().subscribe({
    //   next: (data: IContact[]) => { this.contacts = data; this.loading = false },
    //   error: (error) => { this.errorMessage = error; this.loading = false },
    // });

    // this.contactService.getAllContacts().subscribe((data: IContact[]) => {
    //   this.contacts = data;
    //   this.loading = false;
    // }, (error) => {
    //   this.errorMessage = error;
    //   this.loading = false;
    // });
  }

  public getAllContactsFromServer() {
    this.loading = true;

    this.contactService.getAllContacts().subscribe({
      next: (data: IContact[]) => { this.contacts = data; this.loading = false },
      error: (error) => { this.errorMessage = error; this.loading = false },
    });
  }

  public clickDeleteContact(contactId: string) {
    this.loading = true;

    setTimeout(() => {
      this.contactService.deleteContact(contactId).subscribe({
        next: () => { this.getAllContactsFromServer(); },
        error: (error) => { this.errorMessage = error; },
      });
      
      this.loading = false;
    }, 1000);

    // this.contactService.deleteContact(contactId).subscribe({
    //   next: () => { this.getAllContactsFromServer(); },
    //   error: (error) => { this.errorMessage = error; },
    // });
  }

  public onSearch() {
    this.contactService.getAllSearchContacts(this.searchTerm || 'No User').subscribe({
      // next: (data: IContact[]) => { console.log(data); this.router.navigate(['/contacts/search', data]).then(); },
      next: (data: IContact[]) => { console.log(data); sessionStorage.setItem('data', JSON.stringify(data)); localStorage['data'] = data; this.router.navigateByUrl('/contacts/search').then(); },
      error: (error) => { this.errorMessage = error; },
    });

    // this.router.navigate([`/contacts/search`]).then();
  }
}
