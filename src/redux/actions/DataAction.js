import { CHANGE_THEME, GET_DATA } from 'redux/constants';
import firebase from '../../firebase/firebase';

const db = firebase.firestore();

export const changeTheme = () => dispatch => {
  dispatch({ type: CHANGE_THEME });
};

export const getData = () => dispatch => {
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
    .catch(err => console.log(err));
};
