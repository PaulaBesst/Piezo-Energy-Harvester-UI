import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: none;
    border-bottom: 2px solid #000;
    border-radius: 2px;
    font-size: 1rem;
    box-sizing: border-box;
    outline: none;
`

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
  );
};

export default InputField;