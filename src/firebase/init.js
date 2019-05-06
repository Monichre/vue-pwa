import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const firebaseConfig = {
  apiKey: 'AIzaSyBK4pAPqSvRoSJaiuVdkR-0I_RpFJ7F6_w',
  authDomain: 'pwa-starter-76208.firebaseapp.com',
  databaseURL: 'https://pwa-starter-76208.firebaseio.com',
  projectId: 'pwa-starter-76208',
  storageBucket: 'pwa-starter-76208.appspot.com',
  messagingSenderId: '889397900348',
  appId: '1:889397900348:web:38e25fbe62848a0a'
}

firebase.initializeApp(firebaseConfig)
