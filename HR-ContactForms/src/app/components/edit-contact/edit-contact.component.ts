import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public loading: boolean = true;
  public contactId: string | null = null;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];
  public group: IGroup = {} as IGroup;

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    // this.loading = true;

    setTimeout(() => {
      this.activatedRoute.paramMap.subscribe({
        next: (param: ParamMap) => { this.contactId = param.get('contactId') },
      });

      if (this.contactId) {
        this.contactService.getContact(this.contactId).subscribe({
          next: (data: IContact) => {
            this.contact = data;
            this.loading = false;
            this.contactService.getAllGroups().subscribe({
              next: (data: IGroup[]) => { this.groups = data; },
            });
            this.contactService.getGroup(this.contact).subscribe({
              next: (data: IGroup) => { this.group = data; },
            });
          },
          error: (error) => { this.errorMessage = error; this.loading = false; },
        })
      }
    }, 1000);

    // this.activatedRoute.paramMap.subscribe({
    //   next: (param: ParamMap) => { this.contactId = param.get('contactId') },
    // });

    // if (this.contactId) {
    //   this.contactService.getContact(this.contactId).subscribe({
    //     next: (data: IContact) => {
    //       this.contact = data;
    //       this.loading = false;
    //       this.contactService.getAllGroups().subscribe({
    //         next: (data: IGroup[]) => { this.groups = data; },
    //       });
    //       this.contactService.getGroup(this.contact).subscribe({
    //         next: (data: IGroup) => { this.group = data; },
    //       });
    //     },
    //     error: (error) => { this.errorMessage = error; this.loading = false; },
    //   })
    // }
  }

  public submitUpdate() {
    if (this.contactId) {

    }
    this.contactService.updateContact(this.contact, this.contactId!).subscribe({
      next: (data: IContact) => { this.router.navigate(['/']).then(); },
      error: (error) => { this.errorMessage = error; this.router.navigate([`/contacts/edit/${this.contactId}`]).then(); }
    }
    );
  }
}
