import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoggerService } from '@core/services/logger.service';
import { ErrorHandler, AppError } from '@core/utils/error-handler';

/**
 * Global HTTP Error Interceptor
 * Handles all HTTP errors and converts them to standardized format
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private logger: LoggerService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  /**
   * Handle HTTP errors
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    const appError = ErrorHandler.handleHttpError(error);

    // Log the error
    this.logger.error(
      `HTTP Error [${appError.code}]: ${appError.message}`,
      error,
      { url: error.url, status: error.status }
    );

    // Handle specific error types
    if (ErrorHandler.isAuthError(error)) {
      this.handleAuthError(error, appError);
    } else if (ErrorHandler.isNetworkError(error)) {
      this.handleNetworkError(appError);
    } else if (ErrorHandler.isServerError(error)) {
      this.handleServerError(error, appError);
    } else if (ErrorHandler.isClientError(error)) {
      this.handleClientError(error, appError);
    }

    return throwError(() => appError);
  }

  /**
   * Handle authentication errors (401, 403)
   */
  private handleAuthError(
    error: HttpErrorResponse,
    appError: AppError
  ): void {
    if (error.status === 401) {
      // Clear auth token and redirect to login
      localStorage.removeItem('authToken');
      this.logger.warn('Authentication token expired or invalid. Redirecting to login.');
      this.router.navigate(['/login']);
    } else if (error.status === 403) {
      this.logger.warn('Access forbidden. User lacks required permissions.');
      this.router.navigate(['/unauthorized']);
    }
  }

  /**
   * Handle network errors
   */
  private handleNetworkError(appError: AppError): void {
    this.logger.error('Network error: Unable to connect to server', undefined, appError);
  }

  /**
   * Handle server errors (5xx)
   */
  private handleServerError(
    error: HttpErrorResponse,
    appError: AppError
  ): void {
    this.logger.error(
      `Server error [${error.status}]: ${error.statusText}`,
      error,
      appError
    );
  }

  /**
   * Handle client errors (4xx)
   */
  private handleClientError(
    error: HttpErrorResponse,
    appError: AppError
  ): void {
    if (error.status === 404) {
      this.logger.warn(`Resource not found: ${error.url}`);
    } else if (error.status === 400) {
      this.logger.warn(`Bad request: ${error.message}`, error.error);
    }
  }
}
