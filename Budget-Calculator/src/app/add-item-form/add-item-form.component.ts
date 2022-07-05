import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { BudgetItem } from 'src/shared/modules/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  // item needs to be set with default value
  @Input() item: BudgetItem = new BudgetItem('', 0);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // console.log(`Value: ${form.value} >>> Valid: ${form.valid}`);
    console.log(form.value, form.valid);
  }

}
