import { TestBed } from '@angular/core/testing';
import { LoggerService, LogLevel } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
    service.clearLogs();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('logging methods', () => {
    it('should log debug message', () => {
      service.debug('Test debug message', { test: true });
      const logs = service.getLogs();
      expect(logs.length).toBe(1);
      expect(logs[0].level).toBe(LogLevel.DEBUG);
      expect(logs[0].message).toBe('Test debug message');
      expect(logs[0].data).toEqual({ test: true });
    });

    it('should log info message', () => {
      service.info('Test info message');
      const logs = service.getLogs();
      expect(logs.length).toBe(1);
      expect(logs[0].level).toBe(LogLevel.INFO);
      expect(logs[0].message).toBe('Test info message');
    });

    it('should log warn message', () => {
      service.warn('Test warn message', { warning: true });
      const logs = service.getLogs();
      expect(logs.length).toBe(1);
      expect(logs[0].level).toBe(LogLevel.WARN);
    });

    it('should log error message', () => {
      const error = new Error('Test error');
      service.error('Test error message', error);
      const logs = service.getLogs();
      expect(logs.length).toBe(1);
      expect(logs[0].level).toBe(LogLevel.ERROR);
      expect(logs[0].error).toBe(error);
    });
  });

  describe('log retrieval', () => {
    it('should get all logs', () => {
      service.debug('Debug 1');
      service.info('Info 1');
      service.warn('Warn 1');

      const logs = service.getLogs();
      expect(logs.length).toBe(3);
    });

    it('should filter logs by level', () => {
      service.debug('Debug 1');
      service.info('Info 1');
      service.warn('Warn 1');
      service.error('Error 1');

      const warnAndError = service.getLogsByLevel(LogLevel.WARN);
      expect(warnAndError.length).toBe(2);
      expect(warnAndError[0].level).toBe(LogLevel.WARN);
      expect(warnAndError[1].level).toBe(LogLevel.ERROR);
    });

    it('should clear logs', () => {
      service.debug('Debug 1');
      service.info('Info 1');
      expect(service.getLogs().length).toBe(2);

      service.clearLogs();
      expect(service.getLogs().length).toBe(0);
    });
  });

  describe('log export', () => {
    it('should export logs as JSON', () => {
      service.info('Test message');
      const exported = service.exportLogs();
      const parsed = JSON.parse(exported);

      expect(Array.isArray(parsed)).toBe(true);
      expect(parsed.length).toBe(1);
      expect(parsed[0].message).toBe('Test message');
    });
  });

  describe('max logs limit', () => {
    it('should maintain max logs limit', () => {
      // Log more than max (100)
      for (let i = 0; i < 150; i++) {
        service.info(`Message ${i}`);
      }

      const logs = service.getLogs();
      expect(logs.length).toBeLessThanOrEqual(100);
    });
  });
});
