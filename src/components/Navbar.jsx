import '../App.css'
import React, { useEffect} from 'react'

import axios from 'axios';
const Navbar = () => {
   
   useEffect(() => {
     axios.get('https://www.googleapis.com/books/v1/volumes?q=white%20whale:keyes&key=AIzaSyDtjvhKOniHFwkIcz7-720bgtnubagFxS8')
        .then(response => response.json())
        .then(result => {
      this.setState({ books: result.items})
      })
   }, [])
  return (
    <div className='navbar'>
        <h1 className='nav_txt'>Dada Book Searching App</h1>
        <input type="text" placeholder=' Find Book'/>
        <button     onClick={() => {
               axios
                 .get('https://www.googleapis.com/books/v1/volumes?q=white%20whale:keyes&key=AIzaSyDtjvhKOniHFwkIcz7-720bgtnubagFxS8')
                 .then(response => response.json())
                 .then(result => {
               this.setState({ books: result.items})
               })
             }}>Search</button>
    </div>
  )
}

export default Navbar