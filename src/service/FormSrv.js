import { db } from "../util/FirebaseConfig";
import { collection, doc, getDocs, setDoc, addDoc, getDoc, query, where } from 'firebase/firestore'

export const addTodo = async (todo) => {
  const productRef = doc(db, "Activos", todo.celular);
  setDoc(productRef, todo);


 
};