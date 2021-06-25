import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCD5Qp5kFZDdn8SAvtZigIgvDJHbx8mcxQ",
    authDomain: "whatsapp-606c7.firebaseapp.com",
    projectId: "whatsapp-606c7",
    storageBucket: "whatsapp-606c7.appspot.com",
    messagingSenderId: "828114429925",
    appId: "1:828114429925:web:003f5e8ce8d44e204db10c"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};