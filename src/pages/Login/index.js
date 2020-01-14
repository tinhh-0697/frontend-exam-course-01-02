import React, { useState } from 'react';
import { InputGroup, InputLabel, InputField, InputError } from 'components/Input';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Button from 'components/Commons/Button';
import { connect } from 'react-redux';
import { logIn, signUp } from 'redux/actions/UserAction';
import { useHistory } from 'react-router-dom';

const Login = ({ logIn, signUp }) => {
  const [loginForm, setLoginForm] = useState(true);
  const history = useHistory();

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 10vh;
    background-color: ${({ theme }) => theme.sixth};
  `;

  const FormWrapper = styled.div`
    width: 35%;
    padding: 15px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.background};

    @media screen and (max-width: 1063px) {
      width: 50%;
    }

    @media screen and (max-width: 992px) {
      width: 70%;
    }

    @media screen and (max-width: 575px) {
      width: 85%;
    }
  `;

  const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `;

  const ButtonStyling = styled(Button)`
    width: 100%;
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
  };

  return (
    <Wrapper>
      <FormWrapper>
        <Formik
          enableReinitialize
          initialValues={{ name: '', email: '', password: '', repass: '' }}
          validationSchema={UpdateSchema}
          onSubmit={values => {
            if (values.repass !== '') {
              signUp(values, history);
            } else {
              logIn(values, history);
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
                  defaultValue={values.pass}
                  error={errors.pass}
                />
                {errors.pass && touched.pass ? <InputError>{errors.pass}</InputError> : null}
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
                <ButtonStyling onClick={changeForm} danger>
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

const mapDispatchToProps = { logIn, signUp };

export default connect(null, mapDispatchToProps)(Login);
