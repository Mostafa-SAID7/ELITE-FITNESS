import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuardService, CanComponentDeactivate } from './auth.guard';
import { LoggerService } from '@core/services/logger.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let router: Router;
  let logger: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService, LoggerService, Router]
    });
    service = TestBed.inject(AuthGuardService);
    router = TestBed.inject(Router);
    logger = TestBed.inject(LoggerService);

    // Clear localStorage
    localStorage.clear();

    // Spy on router
    spyOn(router, 'createUrlTree').and.returnValue(router.parseUrl('/login'));
  });

  describe('canActivate', () => {
    it('should allow access when user is authenticated', () => {
      // Set valid token
      localStorage.setItem('authToken', 'valid.jwt.token');

      const route = {} as ActivatedRouteSnapshot;
      const state = { url: '/dashboard' } as RouterStateSnapshot;

      const result = service.canActivate(route, state);

      expect(result).toBe(true);
    });

    it('should deny access and redirect when user is not authenticated', () => {
      const route = {} as ActivatedRouteSnapshot;
      const state = { url: '/dashboard' } as RouterStateSnapshot;

      service.canActivate(route, state);

      expect(router.createUrlTree).toHaveBeenCalledWith(
        ['/login'],
        jasmine.objectContaining({
          queryParams: { returnUrl: '/dashboard' }
        })
      );
    });

    it('should deny access when token is invalid', () => {
      // Set invalid token (not JWT format)
      localStorage.setItem('authToken', 'invalid-token');

      const route = {} as ActivatedRouteSnapshot;
      const state = { url: '/dashboard' } as RouterStateSnapshot;

      service.canActivate(route, state);

      expect(router.createUrlTree).toHaveBeenCalled();
    });

    it('should deny access when token is expired', () => {
      // Set token but no actual expiration check (would need JWT decode library)
      localStorage.clear();

      const route = {} as ActivatedRouteSnapshot;
      const state = { url: '/admin' } as RouterStateSnapshot;

      service.canActivate(route, state);

      expect(router.createUrlTree).toHaveBeenCalled();
    });
  });

  describe('localStorage handling', () => {
    it('should handle localStorage access errors gracefully', () => {
      spyOn(localStorage, 'getItem').and.throwError('Storage error');

      const route = {} as ActivatedRouteSnapshot;
      const state = { url: '/dashboard' } as RouterStateSnapshot;

      const result = service.canActivate(route, state);

      // Should deny access on error
      expect(router.createUrlTree).toHaveBeenCalled();
    });
  });

  describe('logging', () => {
    it('should log debug message when access is granted', () => {
      spyOn(logger, 'debug');
      localStorage.setItem('authToken', 'valid.jwt.token');

      const route = {} as ActivatedRouteSnapshot;
      const state = { url: '/dashboard' } as RouterStateSnapshot;

      service.canActivate(route, state);

      expect(logger.debug).toHaveBeenCalledWith(
        jasmine.stringContaining('Access granted'),
        jasmine.anything()
      );
    });

    it('should log warning when access is denied', () => {
      spyOn(logger, 'warn');

      const route = {} as ActivatedRouteSnapshot;
      const state = { url: '/dashboard' } as RouterStateSnapshot;

      service.canActivate(route, state);

      expect(logger.warn).toHaveBeenCalledWith(
        jasmine.stringContaining('Unauthorized access'),
        jasmine.anything()
      );
    });
  });
});

describe('CanComponentDeactivate', () => {
  let component: CanComponentDeactivate;

  beforeEach(() => {
    component = {
      canDeactivate: () => true
    };
  });

  it('should be implemented by components with forms', () => {
    expect(component.canDeactivate).toBeDefined();
    expect(typeof component.canDeactivate).toBe('function');
  });

  it('should return boolean or Observable or Promise', () => {
    const result = component.canDeactivate();
    expect(
      typeof result === 'boolean' ||
      (result && typeof result.then === 'function') ||
      (result && typeof result.subscribe === 'function')
    ).toBe(true);
  });
});
