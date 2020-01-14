import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const InputLabel = styled.label`
  margin-right: 20px;
  min-width: 55px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-transform: capitalize;
  color: ${({ theme }) => theme.article};
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  border: 0;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.article};

  &:focus {
    outline: 0;
    color: ${({ theme }) => theme.color.article};
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.article};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.color.article}; /* Internet Explorer 10-11 */
  }
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.color.article}; /* Microsoft Edge */
  }
`;

export const InputError = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smaller};
  padding-left: 10px;
  color: ${({ theme }) => theme.color.seventh};
`;
