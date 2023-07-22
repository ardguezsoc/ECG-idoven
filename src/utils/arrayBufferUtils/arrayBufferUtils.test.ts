import { beforeAll, describe, expect, it, vi } from 'vitest';
import { sliceArrayBuffer, decodeArrayBuffer } from '.';

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
      chunkSize = 10971520;
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
});
