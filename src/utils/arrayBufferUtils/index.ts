const decoder = new TextDecoder();
const chunkSizeBasicChart = 1000000;
const chunkSizeHighChart = 5000000;

export const decodeArrayBuffer = (arrayBuffer: ArrayBuffer) => decoder.decode(arrayBuffer);

export const sliceArrayBuffer = (
  chunkMovement: 1 | -1,
  offsetController: { offset: number; offsetChunk: number },
  arrayBufferData: ArrayBuffer,
  setOffsetController: (offsetController: { offset: number; offsetChunk: number }) => void,
  setFileContent: (fileContent: string) => void,
  formValues: { isHighChart: boolean; step: number }
) => {
  const { isHighChart, step } = formValues;

  const chunkSize = (isHighChart ? chunkSizeHighChart : chunkSizeBasicChart) * step;

  const offsetMovement = offsetController.offset + chunkMovement;
  const offsetChunkMovement = offsetController.offsetChunk + chunkSize * chunkMovement;
  const chunk = arrayBufferData.slice(offsetMovement * chunkSize, offsetChunkMovement);
  const decodedContent = decodeArrayBuffer(chunk);
  setFileContent(decodedContent);
  setOffsetController({ offset: offsetMovement, offsetChunk: offsetChunkMovement });
};

export const parseData = (rawData: string, step: number) => {
  const rows = rawData.split('\n');
  const labels: number[] = [];
  const data: number[] = [];

  for (let i = 0; i < rows.length; i += step) {
    const columns = rows[i].split(',');

    const xValue = parseFloat(columns[0]);
    const yValue = parseFloat(columns[1]);
    if (!Number.isNaN(xValue) && !Number.isNaN(yValue)) {
      labels.push(xValue);
      data.push(yValue);
    }
  }

  return { labels, data };
};
