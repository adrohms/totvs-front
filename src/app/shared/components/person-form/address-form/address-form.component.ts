import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressType } from 'src/app/shared/models/address.model';

@Component({
  selector: 'totvs-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent  {

  @Input() addressFormGroup!: FormGroup<any>;
  public addressTypes = AddressType;

}
