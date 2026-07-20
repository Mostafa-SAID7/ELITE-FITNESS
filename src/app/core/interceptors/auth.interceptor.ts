import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from '@core/services/logger.service';

/**
 * HTTP Auth Interceptor
 * Automatically adds authentication token to outgoing requests
 * Excludes certain endpoints (like login, register)
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly authTokenKey = 'authToken';
  private readonly excludedUrls = [
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
    '/health'
  ];

  constructor(private logger: LoggerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if this URL should be excluded
    if (this.shouldExcludeUrl(request.url)) {
      return next.handle(request);
    }

    // Get auth token from storage
    const token = this.getAuthToken();

    if (token) {
      // Clone request and add Authorization header
      request = this.addAuthHeader(request, token);
    }

    return next.handle(request);
  }

  /**
   * Add Authorization header to request
   */
  private addAuthHeader(
    request: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  /**
   * Get auth token from localStorage
   */
  private getAuthToken(): string | null {
    try {
      return localStorage.getItem(this.authTokenKey);
    } catch (error) {
      this.logger.warn('Unable to retrieve auth token from storage');
      return null;
    }
  }

  /**
   * Check if URL should be excluded from auth header
   */
  private shouldExcludeUrl(url: string): boolean {
    return this.excludedUrls.some(excludedUrl => url.includes(excludedUrl));
  }
}
