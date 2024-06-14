import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConfigService } from 'src/app/core/config/application-config.service';
import { Client, IClient } from 'src/app/shared/models/client.model';
import { IPerson } from 'src/app/shared/models/person.model';
import { IPage } from 'src/app/shared/types/page.interface';

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  private resourceUrl = this.applicationConfigService.getEndpointFor('/api/crm');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  save(client: Client): Observable<{}> {
    return this.http.post(`${this.resourceUrl}/client/create`, client);
  }

  find(login: string): Observable<IPerson> {
    return this.http.get<IPerson>(`${this.resourceUrl}/${login}`);
  }

  findAllByFilter(params: HttpParams): Observable<IPage<IClient[]>> {
    return this.http.get<IPage<IClient[]>>(`${this.resourceUrl}/client/filter`, { params });
  }


}
