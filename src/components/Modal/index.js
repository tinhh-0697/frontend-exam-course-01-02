import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';
import { Formik, Form } from 'formik';
import { InputLabel, InputGroup, InputField } from 'components/Input';
import { updateData, addData } from 'redux/actions/DataAction';
import Button from 'components/Commons/Button';
import Checkbox from 'components/Modal/Checkbox';

// eslint-disable-next-line no-shadow
const Modals = ({ isOpen, toggle, currentItem, updateData, addData }) => {
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
        <Formik
          enableReinitialize
          initialValues={currentItem}
          onSubmit={values => {
            if (values.id) {
              updateData(values);
            } else {
              addData(values);
            }
            toggle();
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, setFieldValue, handleReset }) => (
            <Form onSubmit={handleSubmit} onReset={handleReset}>
              <InputGroup>
                <InputLabel htmlFor="name">Name</InputLabel>
                <InputField
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                />
              </InputGroup>
              <InputGroup>
                <InputLabel htmlFor="views">Name</InputLabel>
                <InputField
                  type="number"
                  name="views"
                  id="views"
                  placeholder="Enter view"
                  onChange={handleChange}
                  defaultValue={values.views}
                />
              </InputGroup>
              <InputGroup>
                <InputLabel htmlFor="view">Status</InputLabel>
                <Checkbox checked={values.status} secondHandle={setFieldValue} />
              </InputGroup>
              <ButtonBlock>
                <Button mr={8} type="submit">
                  Submit
                </Button>
                <Button onClick={toggle} danger>
                  Cancel
                </Button>
              </ButtonBlock>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Wrapper>
  );
};

Modals.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  currentItem: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    views: PropTypes.number,
    status: PropTypes.bool,
  }).isRequired,
  updateData: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ currentItem: state.data.currentItem });

const mapDispatchToProps = { updateData, addData };

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
