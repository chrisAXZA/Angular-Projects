import { Component, OnInit } from '@angular/core';
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

  constructor(private contactService: ContactService) { }

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
    this.contactService.deleteContact(contactId).subscribe({
      next: () => { this.getAllContactsFromServer(); },
      error: (error) => { this.errorMessage = error; },
    });
  }
}
