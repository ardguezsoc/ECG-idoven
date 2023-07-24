import { beforeAll, describe, expect, it, vi } from 'vitest';
import { sliceArrayBuffer, decodeArrayBuffer, parseData } from '.';

describe('arrayBufferUtils', () => {
  describe('decodeArrayBuffer', () => {
    it('should return the correct decoded string', () => {
      const arrayBuffer = new TextEncoder().encode('test').buffer;
      const decodedString = decodeArrayBuffer(arrayBuffer);
      expect(decodedString).toBe('test');
    });
    it('should return empty string with arryBuffer empty', () => {
      const arrayBuffer = new ArrayBuffer(0);
      const decodedString = decodeArrayBuffer(arrayBuffer);
      expect(decodedString).toBe('');
    });
  });
  describe('sliceArrayBuffer', () => {
    let arrayBufferData: ArrayBuffer;
    let chunkSize: number;
    beforeAll(() => {
      arrayBufferData = new TextEncoder().encode('test').buffer;
      chunkSize = 1097152;
    });

    it('should return the correct offset and offsetChunk', () => {
      const chunkMovement = 1;
      const offsetController = { offset: 0, offsetChunk: 0 };
      const setOffsetController = (fakeOffsetController: { offset: number; offsetChunk: number }) => {
        offsetController.offset = fakeOffsetController.offset;
        offsetController.offsetChunk = fakeOffsetController.offsetChunk;
      };
      const setFileContent = vi.fn();

      sliceArrayBuffer(chunkMovement, offsetController, arrayBufferData, setOffsetController, setFileContent);
      expect(setFileContent).toHaveBeenCalledOnce();
      expect(offsetController).toEqual({ offset: 1, offsetChunk: chunkSize });
    });
    it('should return the correct offset and offsetChunk when chunkMovement is -1', () => {
      const chunkMovement = -1;
      const offsetController = { offset: 1, offsetChunk: chunkSize };
      const setOffsetController = (fakeOffsetController: { offset: number; offsetChunk: number }) => {
        offsetController.offset = fakeOffsetController.offset;
        offsetController.offsetChunk = fakeOffsetController.offsetChunk;
      };
      const setFileContent = vi.fn();

      sliceArrayBuffer(chunkMovement, offsetController, arrayBufferData, setOffsetController, setFileContent);
      expect(setFileContent).toHaveBeenCalledOnce();
      expect(offsetController).toEqual({ offset: 0, offsetChunk: 0 });
    });
  });
  describe('parseData', () => {
    it('should return the correct labels and data', () => {
      const rawData = '1,10\n2,11\n3,-5\n4,0';
      const { labels, data } = parseData(rawData);
      expect(labels).toEqual([1, 2, 3, 4]);
      expect(data).toEqual([10, 11, -5, 0]);
    });
    it('should return empty labels and data with rawData without numbers', () => {
      const rawData = '';
      const { labels, data } = parseData(rawData);
      expect(labels).toEqual([]);
      expect(data).toEqual([]);
    });
    it('should return only first column and third one due a non valid values', () => {
      const rawData = '1,10\n2,\n3,-5\n';
      const { labels, data } = parseData(rawData);
      expect(labels).toEqual([1, 3]);
      expect(data).toEqual([10, -5]);
    });
  });
});
