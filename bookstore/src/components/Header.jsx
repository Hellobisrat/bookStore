import React from "react";
import {Link} from 'react-router-dom';


const Header =()=>{
  return (
    <header className="bg-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
          
           <h1 className="text-xl font-bold">
          <Link to='/' className="hover:text-blue-300">
          
          My Bookstore
          </Link>
          
        </h1>
        
        
        <nav>
          <ul className="flex space-x-6">
            <li>
               <Link to="/books" className="hover:text-blue-300">
              Books
              </Link>
            </li>
            <li>
              <Link to="/add-book" className="hover:text-blue-300">
              Add Book
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;