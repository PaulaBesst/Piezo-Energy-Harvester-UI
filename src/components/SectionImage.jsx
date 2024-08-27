import styled from 'styled-components';
import Heading from './Heading';
import Text from './Text';

const Image = styled.div`
width: ${(props) => props.width || `40%`};
height: 100%;
background-image: url(${(props)=>props.src});
background-position: ${(props)=>props.width ? 'center 150px' : 'center'};
background-size: contain;
background-repeat: no-repeat;
position: relative;
`

function SectionImage({src, width}){
    return (
    <Image src={src} width={width}>
       {width && <div style={{position: 'absolute', top: '10%'}}>
        <Heading for="auth">PIEZOELECTRIC</Heading>
        <Heading for="auth">READER</Heading>
        <Text for="normal">Login to access your account</Text>
        </div>}
    </Image>
    )
}

export default SectionImage;