import BookMark from './BookMark';

/* eslint-disable react/prop-types */
const BookMarls = ({ bookmarks, readingTime }) => {
  // console.log(bookmarks);
  return (
    <div className='w-1/3 sticky top-0 h-full'>
      <h1 className='bg-[#6047EC] bg-opacity-10 text-center text-black font-extrabold text-xl capitalize px-12 py-5 rounded-xl border-2 border-[#6047EC] mb-6'>
        Spent time on read : {readingTime} min
      </h1>
      <div className='w-full h-auto bg-black bg-opacity-5 p-6 rounded-xl'>
        <p className='text-xl font-bold'>Bookmarked Blogs : {bookmarks.length}</p>
        <div className=''>
          {bookmarks.map((bookmark, idx) => (
            <BookMark key={idx} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMarls;
