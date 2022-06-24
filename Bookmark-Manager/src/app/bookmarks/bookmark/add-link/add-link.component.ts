import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  link = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  // will add a new link to the backend
  addLink() {

  }

  getLinkError() {
    if (this.link.hasError('required')) {
      return 'You must enter a value!';
    }

    return '';
  }
}
