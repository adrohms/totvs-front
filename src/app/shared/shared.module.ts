import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddressFormComponent } from './components/person-form/address-form/address-form.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PhoneFormComponent } from './components/person-form/phone-form/phone-form.component';
import { CnpjFormatterDirective } from './directives/cnpj-formatter.directive';
import { CpfFormatterDirective } from './directives/cpf-formatter.directive';
import { HasAnyAuthorityDirective } from './directives/has-any-authority.directive';
import { ThemeDirective } from './directives/theme.directive';
import { EnumValuesPipe } from './pipes/enum-values.pipe';
import { PhoneFormatterDirective } from './directives/phone-formatter.directive';
import { ZipCodeFormatterDirective } from './directives/zip-code-formatter.directive';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    EnumValuesPipe,
    CpfFormatterDirective,
    CnpjFormatterDirective,
    PhoneFormatterDirective,
    ZipCodeFormatterDirective,
    ThemeDirective,
    HasAnyAuthorityDirective,
    PersonFormComponent,
    AddressFormComponent,
    PhoneFormComponent,
    ConfirmationDialogComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    // Angular Material Modules
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule,
    MatSortModule,
    MatProgressSpinnerModule,

    // Internally Created
    EnumValuesPipe,
    CpfFormatterDirective,
    CnpjFormatterDirective,
    PhoneFormatterDirective,
    ZipCodeFormatterDirective,
    ThemeDirective,
    PersonFormComponent,
    AddressFormComponent,
    PhoneFormComponent,
    ConfirmationDialogComponent,
    HasAnyAuthorityDirective
  ]
})
export class SharedModule { }
