/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  collection,
    getDocs,
  onSnapshot,
  QuerySnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config";

import { useEffect, useState } from "react";

export function GetCollectionDataFirebase(
  doc: any,
  gender: string,
  size: string,
  category: string
) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (doc && gender && size && category) {
      let docRef: any = collection(db, doc);
      docRef = query(
        docRef,
        where("gender", "==", gender),
        where("size", "==", size),
        where("tag", "==", category)
      );

      const unsubscribe = onSnapshot(docRef, (snapshot: QuerySnapshot) => {
        const dataCollection = snapshot.docs.map((doc) => doc.data());
        setData(dataCollection);
      });

      // Clean up the listener when the component unmounts
      return () => {
        unsubscribe();
      };
    }
  }, [doc, gender, size, category]);

  return data;
}

export const GetItemCartFirebase = async (studentId : number | null) => {
  // Get the Firestore instance
  // const db = getFirestore();

  // Reference to the "users" collection
  const usersCollection = collection(db, 'users');

  // Create a query to find the user by ID
  const userQuery = query(usersCollection, where('studentId', '==', studentId));

  try {
    // Execute the query
    const userSnapshot = await getDocs(userQuery);

    // Check if the user with the specified ID exists
    if (userSnapshot.size > 0) {
      // Get the user document
      const userDoc = userSnapshot.docs[0];

      // Access the "cart" collection inside the user document
      const cartCollectionRef = collection(userDoc.ref, 'cart');

      // Get all documents from the "cart" collection
      const cartSnapshot = await getDocs(cartCollectionRef);

      // Extract cart data
      const cartItemsData = cartSnapshot.docs.map((doc) => doc.data());

      // Return the cart items
      return cartItemsData;
    } else {
      console.log('User not found.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};


