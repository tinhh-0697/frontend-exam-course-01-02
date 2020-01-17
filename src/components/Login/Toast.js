import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ToastWrapper = () => {
  const getState = useSelector(state => state.user);
  const { error, errorMessage } = getState;
  const [show, setShow] = useState(error);

  const ToastStyling = styled(Toast)`
    position: absolute;
    top: 25%;
    right: 50%;
    width: 100%;
    transform: translateX(50%);
    box-shadow: 0px 0px 0 1000px rgba(0, 0, 0, 0.2);
  `;

  return (
    <ToastStyling isOpen={show} onClick={() => setShow(!show)}>
      <ToastHeader>Danger</ToastHeader>
      <ToastBody>{errorMessage}</ToastBody>
    </ToastStyling>
  );
};

export default ToastWrapper;
