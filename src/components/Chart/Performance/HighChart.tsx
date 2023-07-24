import { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Button } from '../../Button';
import { theme } from '../../../themes';
import { parseData } from '../../../utils/arrayBufferUtils';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { ChartProps } from '../Normal/Chart';
import { StyledHighChartContainer } from '..';

export const HighChart: React.FC<ChartProps> = ({ chartData = '', resetFile, moveInFile }) => {
  const { t } = useTranslation();
  const chartRef = useRef(null);

  const { labels, data } = parseData(chartData);

  const options = {
    chart: {
      zoomType: 'xy',
      height: 600,
      panning: true,
      panKey: 'shift',
    },
    title: {
      text: t('idovenCodeChallenge'),
    },
    xAxis: {
      categories: labels,
      enableMouseWheelZoom: true,
      title: {
        text: t('chart.xAxis.title'),
      },
    },
    yAxis: {
      title: {
        text: t('chart.yAxis.title'),
      },
    },
    series: [
      {
        data: data,
        color: theme.palette.secondary.main,
        showInLegend: false,
      },
    ],
  };

  return (
    <StyledHighChartContainer>
      <HighchartsReact id="highChart" highcharts={Highcharts} options={options} ref={chartRef} />
      <Box id="buttonContainer">
        <Button onClick={() => moveInFile(-1)}>{t('button.backward')}</Button>
        <Button onClick={resetFile}>{t('button.uploadNewFile')}</Button>
        <Button onClick={() => moveInFile(1)}>{t('button.forward')}</Button>
      </Box>
    </StyledHighChartContainer>
  );
};
