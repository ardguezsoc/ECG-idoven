import { fileInfoHandler } from './fileInfoHandler';
import { describe, expect, it } from 'vitest';

describe('fileInfoHandler', () => {
  it('should return the correct file info', () => {
    const file = {
      name: 'test.png',
      type: 'image/png',
      size: 10 ** 10,
    } as File;

    expect(fileInfoHandler(file)).toEqual({
      name: 'test',
      size: '10.00',
      type: 'image/png',
      extension: 'png',
      date: new Date().toLocaleDateString(),
    });
  });
  it('should return default values when file values are undefined', () => {
    const file = {} as File;

    expect(fileInfoHandler(file)).toEqual({
      name: '-',
      size: '0.00',
      type: '-',
      extension: '-',
      date: new Date().toLocaleDateString(),
    });
  });
});
