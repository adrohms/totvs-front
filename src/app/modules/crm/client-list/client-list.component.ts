import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, merge, of, startWith, switchMap } from 'rxjs';
import { AccountService } from 'src/app/core/auth/account.service';
import { IPerson } from 'src/app/shared/models/person.model';
import { ClientCreationComponent } from '../client-creation/client-creation.component';
import { CrmService } from '../crm.service';

@Component({
  selector: 'totvs-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit, AfterViewInit {
  public dataSource: any;
  public displayedColumns: string[] = ['id', 'name', 'email', 'view'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  resultsLength = 0;
  pageIndex = 0;
  isLoadingResults = true;
  readonly dialog = inject(MatDialog);

  constructor(
    private crmService: CrmService,
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  clientFilterForm = this.fb.group({
    id: [''],
    name: [''],
    email: [''],
  })

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        const params = this.createParamFromForm();
        return this.crmService.findAllByFilter(
          params
        ).pipe(catchError(() => of(null)));
      }),
      map(clientVM => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;

        if (clientVM === null) {
          return [];
        }

        this.resultsLength = clientVM.totalElements;
        return clientVM.content;
      }),
    )
    .subscribe(clientsVM => this.dataSource = new MatTableDataSource(clientsVM));
  }

  applyFilter() {
    this.isLoadingResults = true;

    const params = this.createParamFromForm();
    this.crmService.findAllByFilter(params).subscribe(clients => {
      this.dataSource = new MatTableDataSource(clients.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
    });
  }

  openClientProfile(selectedUser: IPerson): void {
    console.log(selectedUser);
    this.router.navigate([`/${selectedUser?.id}`])
  }

  createClient(): void {
    const dialogRef = this.dialog.open(ClientCreationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private createParamFromForm(): HttpParams {
    const user = this.clientFilterForm.value;
    console.log(this.paginator?.pageIndex?.toString())
    return new HttpParams()
      .set('id', user.id ?? '')
      .set('name', user.name ?? '')
      .set('email', user.email ?? '')
      .set('page', this.paginator?.pageIndex?.toString())
      .set('size', this.paginator?.pageSize?.toString())
      .set('sort', `${this.getSortLogic()},${this.sort.direction}`);
  }

  private getSortLogic(): string {
    return this.sort.active === 'name' ? 'person.name' : (this.sort.active ?? '');
  }
}
