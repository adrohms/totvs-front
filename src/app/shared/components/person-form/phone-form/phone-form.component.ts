import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PhoneType } from 'src/app/shared/models/phone.mode';

@Component({
  selector: 'totvs-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss'],
})
export class PhoneFormComponent {

  @Input() phoneFormGroup!: FormGroup<any>;
  public phoneTypes = PhoneType;
}
