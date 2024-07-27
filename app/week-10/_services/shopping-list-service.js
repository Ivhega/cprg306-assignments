import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addItem(userId, item) {
    try {
        const newItemRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(newItemRef, item);
        return docRef.id;
    } catch (error) {
        console.log("Error adding item: ", error);
    }
}

export async function getItems(userId) {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const q = query(itemsRef);
        const querySnapshot = await getDocs(q);
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
        });
        return items;
    } catch (error) {
        console.log("Error getting items: ", error);
    }
}
