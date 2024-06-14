import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { ApplicationConfigService } from '../config/application-config.service';
import { Login } from 'src/app/modules/account/login/login.model';

type AuthenticationResponseBody = {
  status: string;
  message: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthServerProvider {

  constructor(
    private http: HttpClient,
    //private localStorageService: LocalStorageService,
    //private sessionStorageService: SessionStorageService,
    private applicationConfigService: ApplicationConfigService
  ) { }

/*   getToken(): string {
    const tokenInLocalStorage: string | null = this.localStorageService.retrieve('authenticationToken');
    const tokenInSessionStorage: string | null = this.sessionStorageService.retrieve('authenticationToken');
    return tokenInLocalStorage ?? tokenInSessionStorage ?? '';
  } */

  login(credentials: Login): Observable<AuthenticationResponseBody> {
    return this.http
      .post<AuthenticationResponseBody>(this.applicationConfigService.getEndpointFor('/api/public/auth/authenticate'), credentials);
      //.pipe(map(response => this.authenticateSuccess(response, credentials.rememberMe)));
  }

  logout(): Observable<void> {
    return new Observable(observer => {
/*       this.localStorageService.clear('authenticationToken');
      this.sessionStorageService.clear('authenticationToken'); */
      observer.complete();
    });
  }

/*   private authenticateSuccess(response: JwtToken, rememberMe: boolean): void {
    const jwt = response.id_token;

    if (rememberMe) {
      this.localStorageService.store('authenticationToken', jwt);
      this.sessionStorageService.clear('authenticationToken');
    } else {
      this.sessionStorageService.store('authenticationToken', jwt);
      this.localStorageService.clear('authenticationToken');
    }
  } */
}
