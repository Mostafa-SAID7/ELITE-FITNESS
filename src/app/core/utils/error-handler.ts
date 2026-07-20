import { HttpErrorResponse } from '@angular/common/http';

export interface AppError {
  code: string;
  message: string;
  statusCode: number;
  userMessage: string;
  timestamp: Date;
  details?: any;
}

/**
 * Converts HTTP errors and application errors to standardized AppError format
 */
export class ErrorHandler {
  /**
   * Handle HTTP error response
   */
  static handleHttpError(error: HttpErrorResponse): AppError {
    const appError: AppError = {
      code: `HTTP_${error.status}`,
      message: error.message || 'Unknown HTTP error',
      statusCode: error.status,
      userMessage: this.getUserMessage(error.status),
      timestamp: new Date(),
      details: error.error
    };

    return appError;
  }

  /**
   * Handle general application error
   */
  static handleAppError(error: Error | any, context?: string): AppError {
    const message = error instanceof Error ? error.message : String(error);

    return {
      code: 'APP_ERROR',
      message,
      statusCode: 0,
      userMessage: 'An unexpected error occurred. Please try again.',
      timestamp: new Date(),
      details: { context, stack: error?.stack }
    };
  }

  /**
   * Check if error is network-related
   */
  static isNetworkError(error: HttpErrorResponse): boolean {
    return error.status === 0 || error.statusText === 'Unknown Error';
  }

  /**
   * Check if error is authentication-related
   */
  static isAuthError(error: HttpErrorResponse): boolean {
    return error.status === 401 || error.status === 403;
  }

  /**
   * Check if error is server-related
   */
  static isServerError(error: HttpErrorResponse): boolean {
    return error.status >= 500;
  }

  /**
   * Check if error is client-related
   */
  static isClientError(error: HttpErrorResponse): boolean {
    return error.status >= 400 && error.status < 500;
  }

  /**
   * Get user-friendly error message based on HTTP status
   */
  private static getUserMessage(statusCode: number): string {
    switch (statusCode) {
      case 0:
        return 'Unable to connect to server. Please check your internet connection.';
      case 400:
        return 'The request was invalid. Please check your input.';
      case 401:
        return 'Authentication failed. Please log in again.';
      case 403:
        return 'You do not have permission to access this resource.';
      case 404:
        return 'The requested resource was not found.';
      case 408:
        return 'Request timeout. Please try again.';
      case 429:
        return 'Too many requests. Please wait a moment and try again.';
      case 500:
        return 'Server error. Please try again later.';
      case 502:
      case 503:
      case 504:
        return 'Server is temporarily unavailable. Please try again later.';
      default:
        return 'An error occurred. Please try again.';
    }
  }
}
