import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCaikqUmm41FyQya8PfVugRd28KpwwPr5E",
  authDomain: "nitjalandhar-148f8.firebaseapp.com",
  databaseURL: "https://nitjalandhar-148f8.firebaseio.com",
  projectId: "nitjalandhar-148f8",
  storageBucket: "nitjalandhar-148f8.appspot.com",
  messagingSenderId: "136410357192",
  appId: "1:136410357192:web:124aa40a98595c0d5834fd",
  measurementId: "G-8Q2K9RDW93"
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		//this.auth = app.auth()
		this.db = app.firestore()
	}

}

export default new Firebase()