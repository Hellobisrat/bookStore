import React, {useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebaseConfig";


const AddBookForm = ()=>{
  const [title, setTitle]= useState("");
  const [author, setAuthor]= useState("");
  const [price, setPrice]= useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      await addDoc(collection(db,"bookStore"), {
        title,
        author,
        price,

      })
      alert("Book added successfully!")
      // clear from fields
      setTitle("");
      setAuthor("");
      setPrice("")
    } catch (error) {
      console.error("Error adding book:",error);
      alert("Failed to add the book. Try again")
      
    }
  }
  return(
    <form 
     onSubmit={handleSubmit}
     className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Add a New Book</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
         id="title"
         type="text"
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm 
         focus:ring-blue-500 focus:border-blue-500"
         required
         />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4
        rounded hover:bg-blue-600">
          Add Book
        </button>

     </form>
  )
}

export default AddBookForm;