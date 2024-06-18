import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { AccountService } from '../core/auth/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'totvs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnDestroy {

  private _mobileQueryListener: () => void;

  protected mobileQuery: MediaQueryList;

  public isSidebarClosed: boolean = true;
  public isAuthenticated: boolean = false;

  @ViewChild('totvsSidenav')
  public totvsSidenav?: MatSidenav;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private accountService: AccountService,
    private router: Router
    ) {
    this.mobileQuery = media.matchMedia('(totvs-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.mobileQuery.addEventListener;

  }

  ngAfterViewInit(): void {
    this.accountService.getAuthenticationState().subscribe(acc => {
      if(acc) this.isAuthenticated = true;
    })
  }

  public get isSidebarClosedAndIsAutenticated(): boolean {
    return this.isSidebarClosed && this.isAuthenticated;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public toggleSidenav(): void {
    if(this.totvsSidenav) {
      this.totvsSidenav?.toggle();
      this.isSidebarClosed = !this.isSidebarClosed;
    }
  }

  public logout(): void {
    this.accountService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/account/login'])
  }

}
