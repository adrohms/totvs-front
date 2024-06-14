import { CrmService } from './../crm.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PersonFormService } from 'src/app/shared/components/person-form/person-form.service';
import { InterestType, OriginType } from 'src/app/shared/models/client.model';


@Component({
  selector: 'totvs-client-creation',
  templateUrl: './client-creation.component.html',
  styleUrl: './client-creation.component.scss'
})
export class ClientCreationComponent implements OnInit  {

  public clientFormGroup!: FormGroup;
  public originType = OriginType;
  public interestType = InterestType;

  constructor(
    private fb: FormBuilder,
    private personFormService: PersonFormService,
    private crmService: CrmService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.clientFormGroup = this.fb.group({
      origin: ['', [Validators.required]],
      interest: ['', [Validators.required]],
      person: this.personFormService.createPersonForm()
    });
  }

  get personFormGroup(): FormGroup {
    return (this.clientFormGroup.get('person') as FormGroup);
  }

  saveClient(): void {
    console.log(this.clientFormGroup.value);
    this.crmService.save(this.clientFormGroup.value).subscribe(
      (response) => {
        this.toastr.success('Cliente salvo com sucesso!');
      },
      (error) => {
        this.toastr.error('Erro:', error.error.message);
      }
    );
  }
}
