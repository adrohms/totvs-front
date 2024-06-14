import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';
import { AccountService } from '../auth/account.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AccountService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to include cookies
    const clonedRequest = request.clone({
      withCredentials: true,
    });

    // Pass the cloned request to the next handler
    return next.handle(clonedRequest).pipe(
      tap((event: any) => {},
      (error: any) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          // Handle unauthorized error here
          this.authService.authenticate(null);
          this.toastr.error("Sessão expirada.")
          this.router.navigate(['/account/login']); // Redirect to login on 401
        }
      })
    );
  }
}
