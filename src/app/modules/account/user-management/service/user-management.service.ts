import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';




import { IUser } from 'src/app/shared/models/user.model';
import { ApplicationConfigService } from 'src/app/core/config/application-config.service';
import { IPage } from 'src/app/shared/types/page.interface';
import { UserMngtVM } from '../user-mngt-vm.model';

@Injectable({ providedIn: 'root' })
export class UserManagementService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('/api/admin/account');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  find(login: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.resourceUrl}/${login}`);
  }

  getAllUsers(params: HttpParams): Observable<IPage<UserMngtVM[]>> {
    return this.http.get<IPage<UserMngtVM[]>>(`${this.resourceUrl}/users`, { params });
  }

}
