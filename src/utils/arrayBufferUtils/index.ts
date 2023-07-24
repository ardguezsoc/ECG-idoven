const decoder = new TextDecoder();
const chunkSize = 1097152;

export const decodeArrayBuffer = (arrayBuffer: ArrayBuffer) => decoder.decode(arrayBuffer);

export const sliceArrayBuffer = (
  chunkMovement: 1 | -1,
  offsetController: { offset: number; offsetChunk: number },
  arrayBufferData: ArrayBuffer,
  setOffsetController: (offsetController: { offset: number; offsetChunk: number }) => void,
  setFileContent: (fileContent: string) => void,
  highChart?: boolean
) => {
  const chunkSlice = highChart ? chunkSize * 5 : chunkSize;
  const offsetMovement = offsetController.offset + chunkMovement;
  const offsetChunkMovement = offsetController.offsetChunk + chunkSlice * chunkMovement;
  const chunk = arrayBufferData.slice(offsetMovement * chunkSlice, offsetChunkMovement);
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
