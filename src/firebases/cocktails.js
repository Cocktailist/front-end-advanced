import {
	doc,
	collection,
	getDocs,
	getDoc,
	query,
	where,
} from "firebase/firestore";
import { db } from ".";

const getCocktails = async () => {
	try {
		const cocktailsColl = collection(db, "cocktails");
		const cocktailsDocs = await getDocs(cocktailsColl);
		return cocktailsDocs.docs.map((docs) => docs.data());
	} catch (error) {
		throw error;
	}
};

const getCocktailByEngName = async (cocktailEngName) => {
	try {
		const cocktails = [];
		const cocktailsColl = collection(db, "cocktails");
		const q = query(cocktailsColl, where("engname", "==", cocktailEngName));
		const docs = await getDocs(q);
		docs.forEach((doc) => cocktails.push(doc.data()));
		return cocktails[0];
	} catch (error) {
		throw error;
	}
};

const getCocktailsByEngNames = async (cocktailEngNames) => {
	try {
		const cocktails = [];
		const cocktailsColl = collection(db, "cocktails");
		const q = query(cocktailsColl, where("engname", "in", cocktailEngNames));
		const docs = await getDocs(q);
		docs.forEach((doc) => cocktails.push(doc.data()));
		return cocktails;
	} catch (error) {
		throw error;
	}
};

const getCocktailByKorName = async (cocktailKorName) => {
	try {
		const cocktails = [];
		const cocktailsColl = collection(db, "cocktails");
		const q = query(cocktailsColl, where("korname", "==", cocktailKorName));
		const docs = await getDocs(q);
		docs.forEach((doc) => cocktails.push(doc.data()));
		return cocktails[0];
	} catch (error) {
		throw error;
	}
};

const getCocktailById = async (cocktailId) => {
	try {
		const cocktailDoc = doc(db, "cocktails", cocktailId);
		const cocktail = await getDoc(cocktailDoc);
		return cocktail.data();
	} catch (error) {
		throw error;
	}
};

const cocktailsAPI = {
	getCocktails,
	getCocktailByEngName,
	getCocktailsByEngNames,
	getCocktailByKorName,
	getCocktailById,
};

export default cocktailsAPI;
