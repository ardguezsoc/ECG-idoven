const decoder = new TextDecoder();
const chunkSize = 109715200;

export const decodeArrayBuffer = (arrayBuffer: ArrayBuffer) => decoder.decode(arrayBuffer);

export const sliceArrayBuffer = (
  chunkMovement: 1 | -1,
  offsetController: { offset: number; offsetChunk: number },
  arrayBufferData: ArrayBuffer,
  setOffsetController: (offsetController: { offset: number; offsetChunk: number }) => void,
  setFileContent: (fileContent: string) => void
) => {
  const offsetMovement = offsetController.offset + chunkMovement;
  const offsetChunkMovement = offsetController.offsetChunk + chunkSize * chunkMovement;
  const chunk = arrayBufferData.slice(offsetMovement * chunkSize, offsetChunkMovement);
  const decodedContent = decodeArrayBuffer(chunk);
  setFileContent(decodedContent);
  setOffsetController({ offset: offsetMovement, offsetChunk: offsetChunkMovement });
};
