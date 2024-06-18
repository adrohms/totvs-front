import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAddress } from '../../models/address.model';
import { IPerson } from '../../models/person.model';
import { IPhone } from '../../models/phone.mode';

@Injectable({
  providedIn: 'root'
})
export class PersonFormService {

  constructor(
    private fb: FormBuilder,
  ) { }

  createPersonForm(person?: IPerson | null): FormGroup {
    return this.fb.group({
      id: [person?.id ?? '', Validators.required],
      name: [person?.name ?? '', Validators.required],
      taxId: [person?.taxId ?? '', Validators.required],
      personType: [person?.personType ?? '', Validators.required],
      email: [person?.email ?? '', Validators.required],
      phones:
        (person?.phones?.length ?? 0) > 0
          ? new FormArray(person!.phones!.map(phone => this.createPhoneFormGroup(phone)))
          : new FormArray([this.createPhoneFormGroup()]),
      addresses:
        (person?.addresses?.length ?? 0) > 0
          ? new FormArray(person!.addresses!.map(address => this.createAddressFormGroup(address)))
          : new FormArray([this.createAddressFormGroup()])
    })
  }

  createAddressFormGroup(address?: IAddress | null): FormGroup {
    return this.fb.group({
      id: [address?.id ?? '', Validators.required],
      street: [address?.street ?? '', Validators.required],
      district: [address?.district ?? '', Validators.required],
      city: [address?.city ?? '', Validators.required],
      state: [address?.state ?? '', Validators.required],
      country: [address?.country ?? '', Validators.required],
      zipCode: [address?.zipCode ?? '', Validators.required],
      addressType: [address?.addressType ?? '', Validators.required]
    })
  }

  createPhoneFormGroup(phone?: IPhone | null): FormGroup {
    return this.fb.group({
      id: [phone?.id ?? '', Validators.required],
      number: [phone?.number ?? '', Validators.required],
      phoneType: [phone?.phoneType ?? '', Validators.required]
    })
  }

}
