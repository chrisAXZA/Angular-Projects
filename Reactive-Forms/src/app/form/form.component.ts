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
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  setValue(): void {
    this.personalForm.setValue({
      name: 'new value',
      age: '10',
      email: 'test@abc.com',
    });
  }

  patchValue(): void {
    this.personalForm.patchValue({
      name: 'patched value',
    });
  }

  onSubmit(): void {
    console.log(this.personalForm.value);
  }
}
