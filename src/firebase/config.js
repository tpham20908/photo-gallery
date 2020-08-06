import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDp4i2vVC3kGsmL4_n60T036NC5E21lgzY',
  authDomain: 'fp-photo-gallery.firebaseapp.com',
  databaseURL: 'https://fp-photo-gallery.firebaseio.com',
  projectId: 'fp-photo-gallery',
  storageBucket: 'fp-photo-gallery.appspot.com',
  messagingSenderId: '242120002940',
  appId: '1:242120002940:web:cae667406e238698dea8f9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
