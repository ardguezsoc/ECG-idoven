import { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  registerables,
} from 'chart.js';
import { theme } from '../../../themes';
import { Line } from 'react-chartjs-2';
import { parseData } from '../../../utils/arrayBufferUtils';
import { useTranslation } from 'react-i18next';
import zoomPlugin from 'chartjs-plugin-zoom';
import { StyledChartContainer } from '..';
import { Box } from '@mui/material';
import { Button } from '../../Button';

ChartJS.register(
  ...registerables,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export interface ChartProps {
  chartData: string;
  resetFile: () => void;
  moveInFile: (offsetMove: 1 | -1) => void;
  step: number;
}

export const Chart: React.FC<ChartProps> = ({ chartData = '', resetFile, moveInFile, step = 10 }) => {
  const { t } = useTranslation();
  const chartRef = useRef<ChartJS | null>(null);
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
          modifierKey: 'shift',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          mode: 'xy',
          drag: {
            enabled: true,
            borderColor: theme.palette.secondary.main,
            borderWidth: 1,
            backgroundColor: theme.common.lightGrey,
          },
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: t('idovenCodeChallenge'),
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `${value}${t('chart.yAxis.unit')}`,
        },
      },
    },
  };

  const { labels, data } = parseData(chartData, step);

  const resetZoom = () => {
    chartRef?.current?.resetZoom();
  };

  const chartDataset = {
    labels,
    datasets: [
      {
        data,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        pointRadius: 0,
      },
    ],
  };

  return (
    <StyledChartContainer>
      {/** @ts-ignore */}
      <Line ref={chartRef} options={options} data={chartDataset} />
      <Box>
        <Button onClick={() => moveInFile(-1)}>{t('button.backward')}</Button>
        <Button onClick={resetZoom}>{t('button.resetZoom')}</Button>
        <Button onClick={resetFile}>{t('button.uploadNewFile')}</Button>
        <Button onClick={() => moveInFile(1)}>{t('button.forward')}</Button>
      </Box>
    </StyledChartContainer>
  );
};
