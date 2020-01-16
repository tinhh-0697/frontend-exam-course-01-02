import styled from 'styled-components';
import { MediaQuery } from 'theme/globalStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  visibility: visible;
  max-width: 350px;
  background-color: ${({ theme }) => theme.background};
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);

  ${MediaQuery.lg`
    max-width: 260px;
    `}

  ${MediaQuery.md`
    transform: ${props => (props.isDisplay ? 'translateX(0)' : 'translateX(-100%)')};
    position: fixed;
    z-index: 20;
    width: 260px;
    height: 100vh;
  `};

  :after {
    content: '';
    display: none;
    position: absolute;
    left: 100%;
    width: 100vh;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    opacity: ${props => (props.isDisplay ? 0.5 : 0)};
  }
`;

export default Wrapper;
