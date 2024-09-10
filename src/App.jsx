import './App.css';
import Blogs from './components/blogs/Blogs';
import BookMark from './components/bookmarks/BookMark';
import BookMarls from './components/bookmarks/BookMarls';
import Header from './components/header/Header';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handelReadingTime = (id, time) => {
    setReadingTime(readingTime + time, id);
    console.log('show the id number', id);

    const removeBokMark = bookmarks.filter((BookMark) => BookMark.id !== id);
    setBookmarks(removeBokMark);
  };
  // eslint-disable-next-line no-unused-vars
  const handelBooksMark = (blog) => {
    const newBookMark = [...bookmarks, blog];
    setBookmarks(newBookMark);
  };
  return (
    <>
      <div className='my-container'>
        <Header />
        <main className='flex justify-between gap-5 mt-9'>
          <Blogs handelBooksMark={handelBooksMark} handelReadingTime={handelReadingTime} />
          <BookMarls bookmarks={bookmarks} readingTime={readingTime} />
        </main>
      </div>
    </>
  );
}

export default App;
