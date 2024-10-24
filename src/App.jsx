

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  const [bookmarks,setBookmarks]= useState([])

  const [readingTime,setReadingTime]=useState(0)


const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks,blog];
   setBookmarks(newBookmarks);
}


const handleMarkAsRead = time =>{

  // setReadingTime(readingTime + time) [evabe sorasori deya jay]

  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime)

}



  return (
    <>
      <Header></Header>

      <main className='md:flex max-w-7xl mx-auto'>

      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>

      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
      
     
      
    </>
  )
}

export default App
