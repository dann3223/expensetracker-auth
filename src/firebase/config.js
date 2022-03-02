import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDVFQOEF_m6nLR5gvMDDI5haNyYtTEoDyg",
  authDomain: "mytracker-f42d4.firebaseapp.com",
  projectId: "mytracker-f42d4",
  storageBucket: "mytracker-f42d4.appspot.com",
  messagingSenderId: "770155311344",
  appId: "1:770155311344:web:b1f55433acb6e7d192d235"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
