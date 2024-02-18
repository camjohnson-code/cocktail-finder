import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBv8s-EjmxKHeQ6_s9bSdMpX2Avty0JFPg',
  authDomain: 'quintessential-cocktails-c4969.firebaseapp.com',
  projectId: 'quintessential-cocktails-c4969',
  storageBucket: 'quintessential-cocktails-c4969.appspot.com',
  messagingSenderId: '400249277001',
  appId: '1:400249277001:web:c776aff99635f1dd29cd98',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
