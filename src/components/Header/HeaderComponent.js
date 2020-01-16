import styled from 'styled-components';
import { Setting } from 'components/Commons/icons';
import { MediaQuery } from 'theme/globalStyle';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountName = styled.h2`
  margin: 0 20px 0 0;
  color: ${({ theme }) => theme.fifty};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-family: 'Rubik', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  ${MediaQuery.xs`
      display: none;
    `}
`;

export const SettingIcon = styled(Setting)`
  width: 32px;
  height: 32px;
  fill: ${({ theme }) => theme.thirty};
`;
