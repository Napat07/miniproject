import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseconfig from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconfig)
}

export default firebase.auth()
