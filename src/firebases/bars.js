import {
	doc,
	collection,
	getDocs,
	getDoc,
	query,
	where,
} from "firebase/firestore";
import { db } from ".";

const getBars = async () => {
	try {
		const barsColl = collection(db, "bars");
		const barsDocs = await getDocs(barsColl);
		return barsDocs.docs.map((docs) => docs.data());
	} catch (error) {
		throw error;
	}
};

const getBarById = async (barId) => {
	try {
		const barDoc = doc(db, "bars", barId);
		const bar = await getDoc(barDoc);
		return bar.data();
	} catch (error) {
		throw error;
	}
};

const getBarByName = async (barName) => {
	try {
		const bars = [];
		const barsColl = collection(db, "bars");
		const q = query(barsColl, where("name", "==", barName));
		const docs = await getDocs(q);
		docs.forEach((doc) => bars.push(doc.data()));
		return bars[0];
	} catch (error) {
		throw error;
	}
};

const barsAPI = {
	getBars,
	getBarById,
	getBarByName,
};

export default barsAPI;
