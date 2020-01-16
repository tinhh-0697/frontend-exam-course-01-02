/* eslint-disable no-console */
import { SIGN_UP, LOG_IN, LOG_OUT, LOG_IN_TOKEN, LOG_ERROR } from 'redux/constants';
import jwtDecode from 'jwt-decode';
import firebase from '../../firebase/firebase';

const db = firebase.firestore();

export const logIn = (userAccount, history) => dispatch => {
  const { email, password } = userAccount;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      return data.user.getIdToken(); // return token
    })
    .then(idToken => {
      localStorage.setItem('Token', idToken);
      return db
        .collection('users')
        .doc(jwtDecode(idToken).user_id)
        .get(); // return user data
    })
    .then(doc => {
      dispatch({ type: LOG_IN, payload: doc.data().name });
      history.replace('/'); // push to homescreen
    })
    .catch(err => {
      dispatch({ type: LOG_ERROR });
      console.log(err);
    });
};

export const signUp = (userInfo, history, from) => dispatch => {
  const { name, email, password } = userInfo;
  let userId;
  db.collection('users')
    .where('email', '==', email)
    .get()
    .then(doc => {
      if (doc.exists) {
        return 'User exists';
      }
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    })
    .then(data => {
      userId = data.user.uid;
      return data.user.getIdToken(); // return token
    })
    .then(idToken => {
      window.localStorage.setItem('Token', idToken);
      const userCredential = {
        email,
        name,
      };
      return db.doc(`/users/${userId}`).set(userCredential); // add user to firebase
    })
    .then(() => {
      dispatch({ type: SIGN_UP, payload: { name } });
      history.replace(from);
    })
    .catch(err => {
      dispatch({ type: LOG_ERROR });
      console.log(err);
    });
};

export const logInByToken = (userId, history, from) => dispatch => {
  db.collection('users')
    .doc(userId)
    .get()
    .then(doc => {
      if (doc.exists) {
        dispatch({ type: LOG_IN_TOKEN, payload: doc.data().name });
        return 'User exists';
      }
      return 'User is not exists';
    })
    .then(() => history.replace(from))
    .catch(err => {
      dispatch({ type: LOG_ERROR });
      console.log(err);
    });
};

export const logOutUser = () => dispatch => {
  localStorage.removeItem('Token');
  dispatch({ type: LOG_OUT });
};
