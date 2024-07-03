import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { EventService } from '@services';

export const authGuard: CanActivateFn = (route, state) => {
  const event = inject(EventService);
  const router = inject(Router);
   if (event.isLoggedIn()) return true
  return router.navigate(['/login']), false;
};


// export const authDeGuard: CanDeactivateFn = (component: CanComponentDeactivate) => {
//   const event = inject(EventService);
//   const router = inject(Router);
//   if (event.isLoggedIn()) return true
//   return router.navigate(['/login']);
// };

// export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate) => {
//   return component.canDeactivate ? component.canDeactivate() : true;
// };

