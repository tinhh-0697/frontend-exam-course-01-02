import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';
import { Formik, Form } from 'formik';
import { InputLabel, InputGroup, InputField, InputError } from 'components/Input';
import { updateData, addData } from 'redux/actions/DataAction';
import Button from 'components/Commons/Button';
import Checkbox from 'components/Modal/Checkbox';

// eslint-disable-next-line no-shadow
const Modals = ({ isOpen, toggle, currentItem, updateData, addData }) => {
  const Wrapper = styled(Modal)`
    top: 25%;

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

  const UpdateSchema = Yup.object({
    name: Yup.string()
      .min(5, 'Name should not be short!')
      .max(1000, 'Name should not be long!')
      .required('Name should not be empty'),
    views: Yup.number()
      .min(0, 'Views should not be less than 0')
      .max(1000000, 'Views should not be more than 1000000')
      .required('Views should not be empty'),
  });

  return (
    <Wrapper isOpen={isOpen} toggle={toggle}>
      <ModalBody>
        <Formik
          enableReinitialize
          initialValues={currentItem}
          validationSchema={UpdateSchema}
          onSubmit={values => {
            if (values.id) {
              updateData(values);
            } else {
              addData(values);
            }
            toggle();
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            handleReset,
            touched,
            errors,
          }) => (
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
                  error={errors.name}
                />
                {errors.name && touched.name ? <InputError>{errors.name}</InputError> : null}
              </InputGroup>
              <InputGroup>
                <InputLabel htmlFor="views">Views</InputLabel>
                <InputField
                  type="number"
                  name="views"
                  id="views"
                  placeholder="Enter view"
                  onChange={handleChange}
                  defaultValue={values.views}
                  error={errors.views}
                />
                {errors.views && touched.views ? <InputError>{errors.views}</InputError> : null}
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
