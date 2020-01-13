/* eslint-disable no-console */
import {
  DELETE_DATA,
  GET_DATA,
  ADD_DATA,
  GET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM,
  LOADING_DATA,
  UPDATE_DATA,
} from 'redux/constants';
import firebase from '../../firebase/firebase';

const db = firebase.firestore();

export const deleteData = id => dispatch => {
  db.collection('elements')
    .doc(id)
    .delete()
    .then(() => console.log('Deleted'))
    .catch(err => console.log(err));

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

export const getCurrentItem = id => dispatch => {
  dispatch({ type: GET_CURRENT_ITEM, payload: id });
};

export const updateData = item => dispatch => {
  const { id, name, views, status } = item;
  dispatch({ type: UPDATE_DATA, payload: item });
  db.collection('elements')
    .doc(id)
    .update({
      name,
      views,
      status,
    })
    .then(() => console.log('Update is seccess'))
    .catch(err => console.log(err));
};

export const clearCurrentItem = () => dispatch => {
  dispatch({ type: CLEAR_CURRENT_ITEM });
};

export const addData = item => dispatch => {
  const { name, views, status } = item;
  const newDataRef = db.collection('elements').doc().id;

  dispatch({ type: ADD_DATA, payload: { id: newDataRef, ...item } });

  db.collection('elements')
    .doc(newDataRef)
    .set({
      name,
      views,
      status,
    })
    .then(() => console.log('Add success'))
    .catch(err => console.log(err));
};
