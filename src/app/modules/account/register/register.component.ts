import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonFormService } from 'src/app/shared/components/person-form/person-form.service';
import { RegisterService } from './register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'totvs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registrationFormGroup!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private personFormService: PersonFormService,
    private registerService: RegisterService,
    private toastr: ToastrService
  ) {
    this.registrationFormGroup = this.fb.group({
      // Add other registration fields
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      authorities: [["USER"]],
      // Include the person-form component
      person: this.personFormService.createPersonForm()
    });
  }


  get personFormGroup(): FormGroup {
    return (this.registrationFormGroup.get('person') as FormGroup);
  }


  public register(): void {
    this.setRegisterFormEmailWithPersonFormEmail();

    this.registerService.save(this.registrationFormGroup.value).subscribe(
      (response) => {
        this.toastr.success('Usuário criado com sucesso, aguarde aprovação!');
      },
      (error) => {
        this.toastr.error('Error:', error);
      }
    );
  }

  private setRegisterFormEmailWithPersonFormEmail() {
    this.registrationFormGroup.get('email')?.setValue(
      (this.registrationFormGroup.get('person') as FormGroup).get('email')?.value
    )
  }

}
