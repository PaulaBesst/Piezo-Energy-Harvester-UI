import styled from 'styled-components';
import Heading from './Heading';
import Text from './Text';

const Container = styled.div`
  flex: 1;
  padding: 2rem 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
`

const Icon = styled.i`
font-size: 1.5rem;
`

const Card = ({ title, content, icon }) => {
  return (
    <Container>
      <Icon>
      {icon}
      </Icon>
      <Heading is="card_title">{title}</Heading>
      <Text is='card'>{content}</Text>
    </Container>
  );
};

export default Card;