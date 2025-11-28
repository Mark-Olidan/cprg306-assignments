

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


async function getItems(userId) {
 try {
    const itemsCollectionReference = collection(db, "users", userId, "items");
    const itemsCollectionQuery = query(itemsCollectionReference);
    const querySnapshot = await getDocs(itemsCollectionQuery);
    let items = [];
    querySnapshot.forEach((doc) => {
        let itemData = {
            id: doc.id,
            ...doc.data()
        };
        items.push(itemData);
    });

    return items;
 } catch (error) {
    console.error("Error getting items: ", error);
    return [];
 }
}

async function addItem(userId, item) {
    try {
        const itemsCollectionReference = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollectionReference, item);
        console.log("Item added successfully with ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
        throw error;
    }
}

export { getItems, addItem };