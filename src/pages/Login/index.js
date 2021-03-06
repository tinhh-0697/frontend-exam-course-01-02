import React, { useState } from 'react';
import { InputGroup, InputLabel, InputField, InputError } from 'components/Input';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Button from 'components/Commons/Button';
import Toast from 'components/Login/Toast';
import { connect, useDispatch } from 'react-redux';
import { logIn, signUp } from 'redux/actions/UserAction';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MediaQuery } from 'theme/globalStyle';

// eslint-disable-next-line no-shadow
const Login = ({ logIn, signUp, error }) => {
  const [loginForm, setLoginForm] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const changeErr = useDispatch();

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    padding-top: 10vh;
    background-color: ${({ theme }) => theme.sixth};
  `;

  const FormWrapper = styled.div`
    width: 35%;
    padding: 15px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.background};
    box-shadow: 0px 0px 59px 5px rgba(0, 0, 0, 0.3);

    ${MediaQuery.lg`
      width: 50%;
    `}

    ${MediaQuery.md`
      width: 70%;
    `}

    ${MediaQuery.xs`
      width: 85%;
    `}
  `;

  const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `;

  const ButtonStyling = styled(Button)`
    width: 100% !important;
    margin-bottom: 10px;
  `;

  const UpdateSchema = Yup.object({
    name: Yup.string()
      .min(5, 'Name should not be short!')
      .max(100, 'Name should not be long!')
      .required(!loginForm && 'Name is required!'),
    email: Yup.string()
      .email('Invalid email')
      .min(5, 'Email should not be short!')
      .max(1000, 'Email should not be long!')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, 'Password should not be less than 6')
      .max(14, 'Password should not be more than 14')
      .required('Password is required!'),
    repass: Yup.string()
      .oneOf([Yup.ref('password')], 'Password does not match')
      .required(!loginForm && 'Password confirmation is required!'),
  });

  const changeForm = () => {
    setLoginForm(!loginForm);
    changeErr({ type: 'CLEAR_ERROR' });
  };

  return (
    <Wrapper>
      <Toast />
      <FormWrapper>
        <Formik
          enableReinitialize
          initialValues={{ name: '', email: '', password: '', repass: '' }}
          validationSchema={UpdateSchema}
          onSubmit={values => {
            if (values.repass !== '') {
              signUp(values, history, location.pathname);
            } else {
              logIn(values, history, location.pathname);
            }
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, handleReset, touched, errors }) => (
            <Form onSubmit={handleSubmit} onReset={handleReset}>
              {!loginForm && (
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
              )}
              <InputGroup>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  error={errors.email}
                />
                {errors.email && touched.email ? <InputError>{errors.email}</InputError> : null}
              </InputGroup>
              <InputGroup>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  defaultValue={values.password}
                  error={errors.password}
                />
                {errors.password && touched.password ? (
                  <InputError>{errors.password}</InputError>
                ) : null}
              </InputGroup>
              {!loginForm && (
                <InputGroup>
                  <InputField
                    type="password"
                    name="repass"
                    id="repass"
                    placeholder="Re-Enter password"
                    onChange={handleChange}
                    defaultValue={values.repass}
                    error={errors.repass}
                  />
                  {errors.repass && touched.repass ? (
                    <InputError>{errors.repass}</InputError>
                  ) : null}
                </InputGroup>
              )}
              <ButtonBlock>
                <ButtonStyling type="submit">{loginForm ? 'Login' : 'Signup'}</ButtonStyling>
                <ButtonStyling type="button" onClick={changeForm}>
                  {loginForm ? 'Signup' : 'Login'}
                </ButtonStyling>
              </ButtonBlock>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Wrapper>
  );
};

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ error: state.user.error });

const mapDispatchToProps = { logIn, signUp };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
