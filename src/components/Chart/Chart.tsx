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
} from 'chart.js';
import { theme } from '../../themes';
import { Line } from 'react-chartjs-2';
import { parseData } from '../../utils/arrayBufferUtils';
import { useTranslation } from 'react-i18next';
import zoomPlugin from 'chartjs-plugin-zoom';
import { StyledChartContainer } from '.';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, zoomPlugin);

export const Chart: React.FC<{ chartData: string }> = ({ chartData = '' }) => {
  const { t } = useTranslation();
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
            backgroundColor: theme.palette.primary.main,
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

  const { labels, data } = parseData(chartData);

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
      <Line options={options} data={chartDataset} />
    </StyledChartContainer>
  );
};
