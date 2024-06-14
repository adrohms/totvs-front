import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { PersonType } from 'src/app/shared/models/person.model';
import { PersonFormService } from './person-form.service';

@Component({
  selector: 'totvs-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent {

  @Input() personFormGroup!: FormGroup<any>;
  public personTypes = PersonType;
  public selectedPersonType: any;

  constructor(
    private personFormService: PersonFormService
  ) {
  }

  get phonesFormArray(): FormArray {
    return (this.personFormGroup?.get('phones') as FormArray);
  }

  get addressFormArray(): FormArray {
    return (this.personFormGroup?.get('addresses') as FormArray);
  }

  get phonesFormGroupArray(): Array<FormGroup> {
    const groupList: Array<any> = [];
    this.phonesFormArray?.controls
      .forEach(control => groupList.push(control));
    return groupList;
  }

  get addressesFormGroupArray(): Array<FormGroup> {
    const groupList: Array<any> = [];
    this.addressFormArray?.controls
      .forEach(control => groupList.push(control));
    return groupList;
  }

  cleanForm(): void {
    this.personFormGroup.reset();
  }

  addNewAddress(): void {
    this.addressFormArray.push(
      this.personFormService.createAddressFormGroup()
    );
  }

  removeSelectedAddress(index: number): void {
    if(index === 0) {
      //TODO: TOASTER
      console.log("Ao menos um endereço precisa ser salvo!");
    } else if(!this.addressFormArray.at(index).get('id')?.getRawValue()) {
      this.addressFormArray.removeAt(index);
    } else {
      //TODO: TOASTER
      console.log("Já está salvo, deseja deletar?");
    }
  }

  addNewPhone(): void {
    this.phonesFormArray.push(
      this.personFormService.createPhoneFormGroup()
    );
  }

  removeSelectedPhone(index: number): void {
    if(index === 0) {
      //TODO: TOASTER
      console.log("Ao menos um número de contato precisa ser salvo!");
    } else if(!this.phonesFormArray.at(index).get('id')?.getRawValue()) {
      this.phonesFormArray.removeAt(index);
    } else {
      //TODO: TOASTER
      console.log("Já está salvo, deseja deletar?");
    }
  }

  test(): void {
    console.log(this.personFormGroup);
  }
}
