import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDQlPQODlbCRXjQm6IINS_lsaqbP23Vfbw",
	authDomain: "team-cocktailist.firebaseapp.com",
	projectId: "team-cocktailist",
	storageBucket: "team-cocktailist.appspot.com",
	messagingSenderId: "296802747944",
	appId: "1:296802747944:web:fcd6e7c847b6cfc73b971d",
};

const firebase = initializeApp(firebaseConfig);

export const fireStore = getFirestore(firebase);

export default firebase;
