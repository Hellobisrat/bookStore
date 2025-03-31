import React from "react";

const Footer = ()=>{
  return(
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bisrat Bookstore. All rights reserved.
        </p>
        <p className="mt-2">
          <a 
           href="https://www.example.com/contact"
           target="_blank"
           rel="noopener noreferrer"
           className="hover:text-blue-400"
           >
            Contact Us
           </a>{""}
           |{" "}
           <a
            href="https://www.example.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Privacy Policy
          </a>

        </p>
      </div>
    </footer>
  )
}

export default Footer;