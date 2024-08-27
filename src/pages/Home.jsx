import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { FaArrowRight } from "react-icons/fa6";
import styled from 'styled-components';
import Heading from '../components/Heading';
import SectionImage from '../components/SectionImage';
import Text from '../components/Text';
import { FaChartLine } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh
`

const Content = styled.div`
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
padding: 0 2rem;
justify-content: center;
align-items: center;
gap: 5rem;
`

const Cont = styled.div`
width: 90%;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
`

const ReportCont = styled.div`
margin-top: 2rem;
`

const Btn = styled(Link)`
color: #fff;
background-color: rgba(47, 82, 205, 0.65);
font-size: 1.6rem;
font-weight: 500;
padding: 0.8rem 2.4rem;
transition: all 0.3s;
text-decoration: none;
display: flex;
align-items: center;
gap: 1.2rem;
border-radius: 26px;
box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);
`


function Home(){

  return (
    <>
      <Navbar/>
    <Section>
<SectionImage src='/images/Sun-energy-amico.png'/>
      <Content>
        <div style={{width: '100%'}}>
        <Heading for="landing_page" >Welcome,</Heading>
        <Heading for="landing_page">to our PiezoEnergy Project</Heading>
        </div>
        <Text style={{ fontSize:15}}> Here, you can monitor real-time energy flow, optimize energy storage and 
usage, and gain insights from the data analysis to ensure our systems are 
running at peak efficiency. Your oversight is key to maximizing our renewable 
energy solutions</Text>
      <Cont>
        <Card title="Highly sensitive" content="piezoelectric sensors" icon={<FaChartLine />}/>
        <Card title="Real Time" content="data visualization" icon={<IoStatsChart/>}/>
        <Card title="Easy to use" content="and integrate" icon={<FaUserGear />}/>
      </Cont>
      <ReportCont>
        <Btn to='/reports'>View app readings and details <FaArrowRight /></Btn>
      </ReportCont>
      </Content>
    </Section>
    </>
  );
};

export default Home;