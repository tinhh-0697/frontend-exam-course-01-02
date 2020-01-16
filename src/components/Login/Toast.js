import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ToastWrapper = () => {
  const error = useSelector(state => state.user.error);
  const [show, setShow] = useState(error);

  const ToastStyling = styled(Toast)`
    position: absolute;
    right: 20px;
    top: 20px;
  `;

  return (
    <ToastStyling isOpen={show} onClick={() => setShow(false)}>
      <ToastHeader>Danger</ToastHeader>
      <ToastBody>Something wrong - please log in again!</ToastBody>
    </ToastStyling>
  );
};

export default ToastWrapper;
