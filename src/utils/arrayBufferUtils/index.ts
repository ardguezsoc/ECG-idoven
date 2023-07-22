const decoder = new TextDecoder();
const chunkSize = 10971520;

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

export const parseData = (rawData: string) => {
  const rows = rawData.split('\n');
  const labels: number[] = [];
  const data: number[] = [];

  rows.forEach((row) => {
    const columns = row.split(',');

    const xValue = parseFloat(columns[0]);
    const yValue = parseFloat(columns[1]);
    if (!Number.isNaN(xValue) && !Number.isNaN(yValue)) {
      labels.push(xValue);
      data.push(yValue);
    }
  });

  return { labels, data };
};
