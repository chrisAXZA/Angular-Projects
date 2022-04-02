import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IGroup } from 'src/app/models/IGroup';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public loading: boolean = true;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.contactService.getAllGroups().subscribe({
    //     next: (data) => { this.groups = data; this.loading = false; },
    //     error: (error) => { this.errorMessage = error },
    //   });
    // }, 2000);

    this.contactService.getAllGroups().subscribe({
      next: (data) => { this.groups = data; this.loading = false; },
      error: (error) => { this.errorMessage = error },
    });
  }

  public createSubmit() {
    this.contactService.createContact(this.contact).subscribe({
      next: (data: IContact) => { this.router.navigate(['/']).then(); },
      error: (error) => { this.errorMessage = error; this.router.navigate(['/contacts/add']).then(); }
    }
    );
  }
}
