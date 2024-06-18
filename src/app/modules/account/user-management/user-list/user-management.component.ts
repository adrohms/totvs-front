import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, merge, of, startWith, switchMap } from 'rxjs';
import { AccountService } from 'src/app/core/auth/account.service';
import { UserManagementService } from '../service/user-management.service';
import { UserMngtVM } from '../user-mngt-vm.model';


@Component({
  selector: 'totvs-user-mngt',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit, AfterViewInit {
  public dataSource: any;
  public authorities: string[] = ['USER', 'ADMIN'];
  public displayedColumns: string[] = ['id', 'name', 'email', 'authorities', 'activated', 'view'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  resultsLength = 0;
  pageIndex = 0;
  isLoadingResults = true;

  constructor(
    private userManagementService: UserManagementService,
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  usersFilterForm = this.fb.group({
    id: [''],
    name: [''],
    email: [''],
    authorities: [''],
    activated: ['']
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
        return this.userManagementService.getAllUsers(
          params
        ).pipe(catchError(() => of(null)));
      }),
      map(usersVM => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;

        if (usersVM === null) {
          return [];
        }

        this.resultsLength = usersVM.totalElements;
        return usersVM.content;
      }),
    )
    .subscribe(usersVM => this.dataSource = new MatTableDataSource(usersVM));
  }

  applyFilter() {
    this.isLoadingResults = true;

    const params = this.createParamFromForm();
    this.userManagementService.getAllUsers(params).subscribe(users => {
      this.dataSource = new MatTableDataSource(users.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
    });
  }

  openUserProfile(selectedUser: UserMngtVM): void {
    this.router.navigate([`/${selectedUser?.id}`])
  }

  private createParamFromForm(): HttpParams {
    const user = this.usersFilterForm.value;
    console.log(this.paginator?.pageIndex?.toString())
    return new HttpParams()
      .set('id', user.id ?? '')
      .set('name', user.name ?? '')
      .set('email', user.email ?? '')
      .set('authorities', user.authorities ?? '')
      .set('activated', user.activated ?? '')
      .set('page', this.paginator?.pageIndex?.toString())
      .set('size', this.paginator?.pageSize?.toString())
      .set('sort', `${this.getSortLogic()},${this.sort.direction}`);
  }

  private getSortLogic(): string {
    return this.sort.active === 'name' ? 'person.name' : (this.sort.active ?? '');
  }
}
