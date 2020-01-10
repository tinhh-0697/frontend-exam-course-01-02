import { DELETE_DATA, GET_DATA, LOADING_DATA } from 'redux/constants';
import firebase from '../../firebase/firebase';

const db = firebase.firestore();

export const deleteData = id => dispatch => {
  dispatch({ type: DELETE_DATA, payload: id });
};

export const getData = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  const data = [];
  db.collection('elements')
    .get()
    .then(doc => {
      if (doc) {
        doc.forEach(item => {
          data.push({ id: item.id, ...item.data() });
        });
      }
      dispatch({ type: GET_DATA, payload: data });
    })
    .catch(err => {
      dispatch({ type: GET_DATA, payload: [] });
      console.log(err);
    });
};
