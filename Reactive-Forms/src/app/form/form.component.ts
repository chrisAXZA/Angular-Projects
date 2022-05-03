import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { numericValidator } from '../validators/numeric.validators';
import { locationAgeValidator } from '../validators/location-age.validator';
import { CityValidator } from '../validators/city.async.validator';

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

  constructor(private formBuilder: FormBuilder, private cityValidator: CityValidator) { }

  ngOnInit(): void {
    this.personalForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required], []),
      age: new FormControl('', [numericValidator(), Validators.max(100), Validators.min(0)], []),
      email: new FormControl('', [Validators.required, Validators.email], []),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl('', [], [this.cityValidator.validate.bind(this.cityValidator)]),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
      hobbies: new FormArray([]),
    },
      // { validators: locationAgeValidator }
    );

    this.personalForm.valueChanges.subscribe((value) => {
      // console.log('Value Changes >>> ', value);
    });

    console.log(this.personalForm.updateOn);
    console.log(this.personalForm.get('address.city')?.updateOn);
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

    this.extraFunctionality();
  }

  extraFunctionality(): void {
    // this.personalForm.get(['address', 'city'])?.markAsDirty({ onlySelf: true });
    // this.personalForm.get(['address', 'city'])?.markAsDirty();
    // setTimeout(() => {
    //   this.personalForm.get(['address', 'city'])?.markAsPristine();
    // }, 2000);

    // this.personalForm.get(['address', 'city'])?.markAsTouched();
    // setTimeout(() => {
    //     this.personalForm.get(['address', 'city'])?.markAsUntouched();
    // }, 2000);

    // this.personalForm.markAsTouched();
    // this.personalForm.get(['address'])?.markAllAsTouched();

    this.personalForm.statusChanges.subscribe((status)=>{
      console.log('status change', status);
    });

    console.log(this.personalForm.updateOn);
    console.log(this.personalForm.get('address.city')?.updateOn);

    this.personalForm.markAsDirty();
    this.personalForm.markAllAsTouched();
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

  getControl(controlName: string): FormControl {
    return this.personalForm.get(controlName) as FormControl;
  }

  changeMode(): void {
    if (this.personalForm.get('address')?.disabled) {
      this.personalForm.get('address')?.enable({});
    } else {
      this.personalForm.get('address')?.disable();
    }
  }

  changeValidators(): void {
    // this.personalForm.clearValidators();
    // this.personalForm.updateValueAndValidity();

    // this.personalForm.get('address.city')?.clearAsyncValidators();
    // this.personalForm.get('address.city')?.updateValueAndValidity();

    // this.personalForm.get('age')?.setValidators([Validators.required]);
    // this.personalForm.get('age')?.updateValueAndValidity();

    if (!this.personalForm.get('address.zip')?.hasValidator(Validators.required)) {
      this.personalForm.get('address.zip')?.addValidators([Validators.required]);
      this.personalForm.get('address.zip')?.updateValueAndValidity();

      setTimeout(() => {
        this.personalForm.get('address.zip')?.removeValidators([Validators.required]);
        this.personalForm.get('address.zip')?.updateValueAndValidity();
      }, 2000);
    }
  }

  onSubmit(): void {
    console.log(this.personalForm.value);
    // console.log(this.personalForm.controls);

    // this.personalForm.markAsPristine();
    // this.personalForm.markAsUntouched();

    if (this.personalForm.valid) {
      console.log(this.personalForm.value);
      this.personalForm.markAsPristine();
      this.personalForm.markAsUntouched();
    } else {
      if (this.personalForm.hasError('locationAge')) {
        const errors = this.personalForm.getError('locationAge');
        console.log(errors);

        alert(`The age should be between 17 and 100 for the state of Kabala! Entered age is ${errors.age}`);
      }
    }
  }
}
