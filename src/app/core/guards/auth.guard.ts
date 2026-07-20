import { Injectable, inject } from '@angular/core';
import {
  CanActivateFn,
  CanDeactivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoggerService } from '@core/services/logger.service';

/**
 * Component interface for CanDeactivate guard
 */
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | boolean;
}

/**
 * CanActivate Guard - Protects routes that require authentication
 */
@Injectable({ providedIn: 'root' })
export class AuthGuardService {
  constructor(
    private router: Router,
    private logger: LoggerService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.isAuthenticated()) {
      this.logger.debug(`Access granted to route: ${state.url}`);
      return true;
    }

    this.logger.warn(
      `Unauthorized access attempt to: ${state.url}. Redirecting to login.`
    );
    return this.router.createUrlTree(['/login'], {
      queryParams: { returnUrl: state.url }
    });
  }

  /**
   * Check if user is authenticated
   */
  private isAuthenticated(): boolean {
    try {
      const token = localStorage.getItem('authToken');
      return !!token && this.isTokenValid(token);
    } catch {
      return false;
    }
  }

  /**
   * Validate token (basic check - not cryptographic)
   */
  private isTokenValid(token: string): boolean {
    if (!token) return false;

    try {
      // Basic JWT validation - check if token has 3 parts
      const parts = token.split('.');
      return parts.length === 3;
    } catch {
      return false;
    }
  }
}

/**
 * Functional CanActivate Guard - using functional API
 */
export const canActivateAuth: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const router = inject(Router);
  const logger = inject(LoggerService);
  const authGuard = new AuthGuardService(router, logger);
  return authGuard.canActivate(route, state);
};

/**
 * CanDeactivate Guard - Warns users before leaving forms with unsaved changes
 * Only supports Observable<boolean> and boolean, not Promise
 */
@Injectable({ providedIn: 'root' })
export class CanDeactivateGuardService {
  constructor(private logger: LoggerService) {}

  canDeactivate(
    component: CanComponentDeactivate
  ): Observable<boolean> | boolean {
    if (!component.canDeactivate) {
      return true;
    }

    const canDeactivate = component.canDeactivate();

    if (typeof canDeactivate === 'boolean') {
      if (!canDeactivate) {
        this.logger.warn('Navigation prevented by CanDeactivate guard');
      }
      return canDeactivate;
    }

    // Observable<boolean>
    return canDeactivate;
  }
}

/**
 * Functional CanDeactivate Guard
 * Usage in component:
 * @Component({
 *   ...
 *   canDeactivate: [canDeactivateForm]
 * })
 * export class MyFormComponent implements CanComponentDeactivate {
 *   canDeactivate(): boolean {
 *     return !this.form.dirty || confirm('You have unsaved changes...');
 *   }
 * }
 */
export const canDeactivateForm: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate
): Observable<boolean> | boolean => {
  if (component && component.canDeactivate) {
    return component.canDeactivate();
  }
  return true;
};
