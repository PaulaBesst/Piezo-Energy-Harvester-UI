import Cardmodal from './Cardmodal';
import Chart from './Charts';
import styled from 'styled-components';

const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-top: 2.5rem
`;

const Metrics = ({ title, cardContent, chartData, batteryVoltageData }) => {
  // Ensure chartData and batteryVoltageData have a timestamp property
  const preparedChartData = chartData.map(item => ({
    ...item,
    timestamp: item.timestamp || new Date().toISOString()  // default to current date if timestamp is missing
  }));

  const preparedBatteryVoltageData = batteryVoltageData.map(item => ({
    ...item,
    timestamp: item.timestamp || new Date().toISOString()  // default to current date if timestamp is missing
  }));

  return (
    <MetricsContainer>
      <Cardmodal title={title} content={cardContent}>
        <Chart data={preparedChartData} batteryVoltageData={preparedBatteryVoltageData} />
      </Cardmodal>
    </MetricsContainer>
  );
};

export default Metrics;
