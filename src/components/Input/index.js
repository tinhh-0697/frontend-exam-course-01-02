import React from 'react';
import styled from 'styled-components';

const Input = ({ label, onChange, hint, type, children }) => {
  const InputGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  `;

  const InputLabel = styled.label`
    margin-right: 20px;
    min-width: 55px;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    text-transform: capitalize;
  `;

  const InputField = styled.input`
    flex: 1;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    border: 0;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.light};

    &:focus {
      outline: 0;
      color: ${({ theme }) => theme.color.ninth};
    }
    &::placeholder {
      color: ${({ theme }) => theme.color.ninth};
    }
    &:-ms-input-placeholder {
      color: ${({ theme }) => theme.color.ninth}; /* Internet Explorer 10-11 */
    }
    &::-ms-input-placeholder {
      color: ${({ theme }) => theme.color.ninth}; /* Microsoft Edge */
    }
  `;

  return (
    <InputGroup>
      <InputLabel>{label}</InputLabel>
      {!children && <InputField type={type} onChange={onChange} placeholder={hint} />}
      {children}
    </InputGroup>
  );
};

export default Input;
