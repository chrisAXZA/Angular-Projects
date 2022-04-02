import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  public loading: boolean = true;
  public contactId: string | null = null;
  public contact: IContact = {} as IContact;
  public group: IGroup = {} as IGroup;
  public errorMessage: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
     setTimeout(() => {
      this.activatedRoute.paramMap.subscribe({
        next: (param: ParamMap) => { this.contactId = param.get('contactId') },
      });
  
      if (this.contactId) {
        // this.loading = true;
        this.contactService.getContact(this.contactId).subscribe({
          next: (data: IContact) => {
            this.contact = data;
            this.loading = false;
            this.contactService.getGroup(data).subscribe({
              next: (data: IGroup) => { this.group = data },
            });
          },
          error: (error) => { this.errorMessage = error; this.loading = false; },
        });
      }
    }, 1000);

    // this.activatedRoute.paramMap.subscribe({
    //   next: (param: ParamMap) => { this.contactId = param.get('contactId') },
    // });

    // if (this.contactId) {
    //   // this.loading = true;
    //   this.contactService.getContact(this.contactId).subscribe({
    //     next: (data: IContact) => {
    //       this.contact = data;
    //       this.loading = false;
    //       this.contactService.getGroup(data).subscribe({
    //         next: (data: IGroup) => { this.group = data },
    //       });
    //     },
    //     error: (error) => { this.errorMessage = error; this.loading = false; },
    //   });
    // }
  }

  public isNotEmpty() {
    return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
  }
}
