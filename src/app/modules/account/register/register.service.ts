import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConfigService } from 'src/app/core/config/application-config.service';
import { PersonRegistration } from './person-registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  save(registration: PersonRegistration): Observable<{}> {
    return this.http.post(this.applicationConfigService.getEndpointFor('/api/public/auth/register'), registration);
  }
}
