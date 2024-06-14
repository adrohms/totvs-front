import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class StateStorageService {
  private previousUrlKey = 'previousUrl';

  constructor(
    private sessionStorageService: SessionStorageService,
    private cookieService: CookieService
  ) {}

  storeUrl(url: string): void {
    this.sessionStorageService.store(this.previousUrlKey, url);
  }

  getUrl(): string | null {
    return this.sessionStorageService.retrieve(this.previousUrlKey) as string | null;
  }

  clearUrl(): void {
    this.sessionStorageService.clear(this.previousUrlKey);
  }

  getExpiration(): void {
    const tokenExpiration = this.cookieService.get("tokenExpiration");
    const expirationTime = new Date(tokenExpiration);
    const currentTime = new Date();
    const timeDifference = expirationTime.getTime() - currentTime.getTime();
    const isExpiringSoon = timeDifference <= (5 * 60 * 1000);
    console.log(tokenExpiration);
  }
}
