import { ErrorResponse, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from './error-handler';

describe('ErrorHandler', () => {
  describe('handleHttpError', () => {
    it('should handle 404 error', () => {
      const error = new HttpErrorResponse({
        error: { message: 'Not found' },
        status: 404,
        statusText: 'Not Found',
        url: 'http://api.test/users/1'
      });

      const appError = ErrorHandler.handleHttpError(error);

      expect(appError.code).toBe('HTTP_404');
      expect(appError.statusCode).toBe(404);
      expect(appError.userMessage).toContain('not found');
    });

    it('should handle 401 error', () => {
      const error = new HttpErrorResponse({
        error: { message: 'Unauthorized' },
        status: 401,
        statusText: 'Unauthorized'
      });

      const appError = ErrorHandler.handleHttpError(error);

      expect(appError.code).toBe('HTTP_401');
      expect(appError.userMessage).toContain('Authentication failed');
    });

    it('should handle 500 error', () => {
      const error = new HttpErrorResponse({
        error: { message: 'Internal Server Error' },
        status: 500,
        statusText: 'Internal Server Error'
      });

      const appError = ErrorHandler.handleHttpError(error);

      expect(appError.code).toBe('HTTP_500');
      expect(appError.userMessage).toContain('Server error');
    });

    it('should handle network error', () => {
      const error = new HttpErrorResponse({
        status: 0,
        statusText: 'Unknown Error'
      });

      const appError = ErrorHandler.handleHttpError(error);

      expect(appError.code).toBe('HTTP_0');
      expect(appError.userMessage).toContain('Unable to connect');
    });
  });

  describe('handleAppError', () => {
    it('should handle Error instance', () => {
      const error = new Error('Test error');
      const appError = ErrorHandler.handleAppError(error, 'Test context');

      expect(appError.code).toBe('APP_ERROR');
      expect(appError.message).toBe('Test error');
      expect(appError.statusCode).toBe(0);
      expect(appError.details.context).toBe('Test context');
    });

    it('should handle string error', () => {
      const appError = ErrorHandler.handleAppError('String error');

      expect(appError.code).toBe('APP_ERROR');
      expect(appError.message).toBe('String error');
    });
  });

  describe('error type checks', () => {
    it('should identify network errors', () => {
      const error = new HttpErrorResponse({ status: 0 });
      expect(ErrorHandler.isNetworkError(error)).toBe(true);
    });

    it('should identify auth errors', () => {
      const error401 = new HttpErrorResponse({ status: 401 });
      const error403 = new HttpErrorResponse({ status: 403 });

      expect(ErrorHandler.isAuthError(error401)).toBe(true);
      expect(ErrorHandler.isAuthError(error403)).toBe(true);
    });

    it('should identify server errors', () => {
      const error = new HttpErrorResponse({ status: 500 });
      expect(ErrorHandler.isServerError(error)).toBe(true);
    });

    it('should identify client errors', () => {
      const error = new HttpErrorResponse({ status: 400 });
      expect(ErrorHandler.isClientError(error)).toBe(true);
    });
  });

  describe('user message mapping', () => {
    const testCases = [
      { status: 400, expected: 'invalid' },
      { status: 401, expected: 'Authentication' },
      { status: 403, expected: 'permission' },
      { status: 404, expected: 'not found' },
      { status: 500, expected: 'Server error' },
      { status: 503, expected: 'unavailable' }
    ];

    testCases.forEach(({ status, expected }) => {
      it(`should return appropriate message for ${status}`, () => {
        const error = new HttpErrorResponse({ status });
        const appError = ErrorHandler.handleHttpError(error);
        expect(appError.userMessage.toLowerCase()).toContain(
          expected.toLowerCase()
        );
      });
    });
  });
});
