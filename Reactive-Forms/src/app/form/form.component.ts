import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // personalForm: FormGroup = this.formBuilder.group({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  //   email: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  //   hobbies: new FormArray([]),
  // });

  personalForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalForm = this.formBuilder.group({
      name: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
      hobbies: new FormArray([]),
    });

    this.personalForm.valueChanges.subscribe((value)=>{
      // console.log('Value Changes >>> ', value);
    });
  }

  get hobbies() {
    return this.personalForm.get('hobbies') as FormArray;
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
      hobbies: this.hobbies.value,
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

  addHobby(): void {
    this.hobbies.push(new FormControl(''));
  }

  getControl(controlName: string): FormControl{
    return this.personalForm.get(controlName) as FormControl;
  }

  onSubmit(): void {
    console.log(this.personalForm.controls);
  }
}
