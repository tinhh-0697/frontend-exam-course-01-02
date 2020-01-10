import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/Commons/Button';
import Input from 'components/Input';
import Checkbox from 'components/Modal/Checkbox';

const Modals = ({ isOpen, toggle }) => {
  const Wrapper = styled(Modal)`
    .modal-content {
      padding: 15px;
      border: 0;
      background-color: ${({ theme }) => theme.dark};
    }
  `;

  const ButtonBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  `;

  return (
    <Wrapper isOpen={isOpen} toggle={toggle}>
      <ModalBody>
        <Input label="Name" onChange={() => {}} hint="Enter name" type="text" />
        <Input label="Views" onChange={() => {}} hint="Enter views" type="number" />
        <Input label="Status">
          <Checkbox />
        </Input>
        <ButtonBlock>
          <Button mr={20} handleClick={toggle}>
            Submit
          </Button>
          <Button danger handleClick={toggle}>
            Cancel
          </Button>
        </ButtonBlock>
      </ModalBody>
    </Wrapper>
  );
};

Modals.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Modals;
