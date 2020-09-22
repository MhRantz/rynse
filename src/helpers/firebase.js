import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDK5nw3znnEnxZTLQeJkZgBtaFaItqtm8U",
	authDomain: "rynse-repeat.firebaseapp.com",
	databaseURL: "https://rynse-repeat.firebaseio.com",
	projectId: "rynse-repeat",
	storageBucket: "rynse-repeat.appspot.com",
	messagingSenderId: "114262950451",
	appId: "1:114262950451:web:8a98c70472af3c87eb9946"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;