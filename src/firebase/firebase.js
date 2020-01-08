import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDehJ4RqsLHRvfydU5t5rE8XjmWtZI61Y4',
  authDomain: 'intern-end.firebaseapp.com',
  databaseURL: 'https://intern-end.firebaseio.com',
  projectId: 'intern-end',
  storageBucket: 'intern-end.appspot.com',
  messagingSenderId: '747668241119',
  appId: '1:747668241119:web:cd812e286965358dee476a',
  measurementId: 'G-NRQZX8S2EQ',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
