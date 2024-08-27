
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 45rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 1.2rem;
`;

const CardContent = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Cardmodal = ({ title, content, children }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      {children}
    </CardContainer>
  );
};

export default Cardmodal;