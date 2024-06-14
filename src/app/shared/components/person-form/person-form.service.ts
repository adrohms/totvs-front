import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PersonFormService {

  constructor(
    private fb: FormBuilder,
  ) { }

  createPersonForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      taxId: ['', Validators.required],
      personType: ['', Validators.required],
      email: ['', Validators.required],
      phones: new FormArray([this.createPhoneFormGroup()]),
      addresses: new FormArray([this.createAddressFormGroup()]),
    })
  }

  createAddressFormGroup(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      street: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required],
      addressType: ['', Validators.required]
    })
  }

  createPhoneFormGroup(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      number: ['', Validators.required],
      phoneType: ['', Validators.required]
    })
  }

}
