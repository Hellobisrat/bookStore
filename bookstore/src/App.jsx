
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList';
import Header from './components/Header';
import Footer from './components/Footer';
import bookImage from './images/book.jpg';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
       <Header/>
        <main className='flex-grow container mx-auto py-6'>
          <Routes>
           {/* Home Page */}
           <Route path="/" element={<h2 className="text-2xl text-center ">
            <img
           src={bookImage}
           alt="Bookstore Logo"
           className="h-100 w-100"/>
           Welcome to My Bookstore</h2>} />

           {/* Books Page */}
           <Route path="/books" element={<BookList />} />

            {/* Add Book Page */}
          <Route path="/add-book" element={<AddBookForm />} />

          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
