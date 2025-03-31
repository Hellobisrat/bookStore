import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";

const BookList = ()=>{
  const [books,setBooks]= useState([]);

  useEffect(()=>{
    const fetchBooks = async ()=>{
     try {
      const querySnapshot = await getDocs(collection(db,'bookStore'));
      const booksData = querySnapshot.docs.map((doc)=>({
               ...doc.data()  
      }))
      setBooks(booksData)
     } catch (error) {
      console.error("Error fetching books:",error);
     } 
    }
    fetchBooks();
  },[]);

  return(
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Available Books</h2>
      {books.length > 0 ? (
        <ul className="space-y-4">
          {books.map((book)=>(
            <li key={book.id}
            className="bg-white shadow-md rounded-md p-4
            border border-gray-200">
              <h3 className="text-lg font-bold">{book.title}</h3>
              <p className="text-sm text-gray-600">Author:{book.author}</p>
              <p className="text-sm text-gray-600">Price:{book.price}</p>
            </li>
          ))}
        </ul>
      ):(
        <p> Np books available. Please add some!</p>
      )}
    </div>
  )
}

export default BookList;