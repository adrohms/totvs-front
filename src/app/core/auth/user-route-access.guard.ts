import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from './account.service';
import { StateStorageService } from './state-storage.service';
import { Account } from './account.model';
import { map } from 'rxjs';


export const routeAccessGuard: CanActivateFn = (route, state) => {

  const accountService = inject(AccountService);
  const stateStorageService = inject(StateStorageService);
  const router = inject(Router);

  return accountService.identity().pipe(
    map((account: Account | null) => {

      if (account) {

        const authorities = route.data['authorities'];

        if (!authorities || authorities.length === 0 || accountService.hasAnyAuthority(authorities)) {
          return true;
        }

        router.navigate(['accessdenied']);
        return false;
      }

      stateStorageService.storeUrl(state.url);
      router.navigate(['/account/login']);
      return false;
    })
  );
};
