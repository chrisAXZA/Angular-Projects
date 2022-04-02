import { ActivatedRoute, ParamMap } from '@angular/router';
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

  public loading: boolean = false;
  public contactId: string | null = null;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];
  public group: IGroup = {} as IGroup;

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {

    this.loading = true;

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
  }

}
