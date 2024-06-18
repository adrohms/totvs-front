import { PersonFormService } from 'src/app/shared/components/person-form/person-form.service';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrmService } from '../crm.service';
import { ToastrService } from 'ngx-toastr';
import { IClient, InterestType, OriginType } from 'src/app/shared/models/client.model';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'totvs-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.scss'
})
export class ClientDetailComponent implements OnInit {

  public clientFormGroup?: FormGroup;

  public originType = OriginType;
  public interestType = InterestType;

  constructor(
    private fb: FormBuilder,
    private personFormService: PersonFormService,
    private crmService: CrmService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<ClientDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) {
    this.clientFormGroup = new FormGroup({
      id: new FormControl(),
      origin: new FormControl(),
      interest: new FormControl(),
      person: this.personFormService.createPersonForm()
    });
  }

  ngOnInit(): void {

    const clientId = this.data.id;

    if(clientId) {
      this.crmService.find(clientId).subscribe((client: IClient) => {
        this.createFormFromClient(client);
      })
    } else {
      this.dialogRef.close();
    }

  }

  createFormFromClient(client: IClient): void {
    this.clientFormGroup = this.fb.group({
      id: [client.id],
      origin: [client.origin],
      interest: [client.interest],
      person: this.personFormService.createPersonForm(client.person)
    })
  }

  get personFormGroup(): FormGroup {
    return (this.clientFormGroup?.get('person') as FormGroup);
  }

  updateClient(): void {
    console.log(this.clientFormGroup?.value);
    this.crmService.update(this.clientFormGroup?.value).subscribe(
      (response) => {
        this.createFormFromClient(response);
        this.toastr.success('Cliente atualizado com sucesso!');
        this.dialogRef.close();
      },
      (error) => {
        this.toastr.error('Erro:', error.error.message);
      }
    );
  }
}
