import firebase from 'firebase/app'

export const firebaseModule = () => {
	const config = {
		apiKey: "AIzaSyCH9-6XjH9iIr2kbWxuGbUYLcPFivHIUfk",
		authDomain: "kikeestradadev-22aaf.firebaseapp.com",
		projectId: "kikeestradadev-22aaf",
		storageBucket: "kikeestradadev-22aaf.appspot.com",
		messagingSenderId: "983690367203",
		appId: "1:983690367203:web:44f3fe94fa31b6eee275d6",
		measurementId: "G-Q7YBN1KXPQ"
	}
	
	const init = () => firebase.initializeApp(config) 
	
	init()
};



