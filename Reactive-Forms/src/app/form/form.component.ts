import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  personalForm: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  setValue(): void {
    this.personalForm.setValue({
      name: 'new value',
      age: '10',
      email: 'test@abc.com',
      address: {
        street: 'sfsfsfs',
        city: 'mmm',
        state: 'kekeke',
        zip: '1111',
      },
    });
  }

  patchValue(): void {
    this.personalForm.patchValue({
      name: 'patched value',
      address: {
        city: 'bebebe',
      },
    });
  }

  clearValues(): void {
    this.personalForm.reset();
  }

  onSubmit(): void {
    console.log(this.personalForm.value);
  }
}
