import Metrics from '../components/Metrics';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../firebaseConfig';
import Heading from '../components/Heading';

const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ReportsPage = () => {
  const [data, setData] = useState({
    batteryVoltage: [],
    piezoPower: [],
    piezoVoltage: [],
    piezoCurrent: [],
  });
  const [error, setError] = useState(null);

  const userid = '3iGjijXztFW5qCg3JWUBPY9Vqml1';

  useEffect(() => {
    const userdataRef = ref(database, `UsersData/${userid}`);

    const fetchData = () => {
      try {
        onValue(userdataRef, (snapshot) => {
          const fetchedData = snapshot.val();
          const timestamp = new Date().toISOString(); // Add timestamp
          if (fetchedData) {
            setData((prevState) => ({
              batteryVoltage: [...prevState.batteryVoltage, { index: prevState.batteryVoltage.length, value: fetchedData.batteryVoltage, timestamp }],
              piezoCurrent: [...prevState.piezoCurrent, { index: prevState.piezoCurrent.length, value: fetchedData.piezoCurrent, timestamp }],
              piezoPower: [...prevState.piezoPower, { index: prevState.piezoPower.length, value: fetchedData.piezoPower, timestamp }],
              piezoVoltage: [...prevState.piezoVoltage, { index: prevState.piezoVoltage.length, value: fetchedData.piezoVoltage, timestamp }],
            }));
          } else {
            setData({
              batteryVoltage: [],
              piezoPower: [],
              piezoVoltage: [],
              piezoCurrent: [],
            });
          }
        });
      } catch (error) {
        setError(error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up an interval to fetch data every second
    const intervalId = setInterval(fetchData, 1000);

    // Clean up interval on component unmount
    return () => {
      off(userdataRef);
      clearInterval(intervalId);
    };
  }, [userid]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Body>
      <Heading for="landing_page">Reports</Heading>
      <Container>
        <Metrics
          title="Power Rate"
          cardContent={data.piezoPower.length ? data.piezoPower[data.piezoPower.length - 1].value : 'Loading...'}
          chartData={data.piezoPower}
          batteryVoltageData={data.batteryVoltage}
        />
        <Metrics
          title="Voltage Rate"
          cardContent={data.piezoVoltage.length ? data.piezoVoltage[data.piezoVoltage.length - 1].value : 'Loading...'}
          chartData={data.piezoVoltage}
          batteryVoltageData={data.batteryVoltage}
        />
        <Metrics
          title="Current Rate"
          cardContent={data.piezoCurrent.length ? data.piezoCurrent[data.piezoCurrent.length - 1].value : 'Loading...'}
          chartData={data.piezoCurrent}
          batteryVoltageData={data.batteryVoltage}
        />
      </Container>
    </Body>
  );
};

export default ReportsPage;
