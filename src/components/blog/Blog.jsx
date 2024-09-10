// eslint-disable-next-line react/prop-types

import { CiBookmark } from 'react-icons/ci';
const Blog = ({ blog, handelBooksMark, handelReadingTime }) => {
  const { id, title, cover, hashtags, author, posted_date, reading_time } = blog;

  return (
    <div className='border-b-2 mb-32 '>
      <img className='w-[845px] h-[450px] rounded-xl' src={cover} alt='' />
      <div className='flex justify-between items-center mt-5'>
        <div className='flex items-center gap-2'>
          <div className='w-[80px] h-[80px] bg-red-400 rounded-full border-2 border-black'></div>
          <div>
            <h1 className='font-bold text-xl'>{author}</h1>
            <h1>{posted_date}</h1>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          {/* <span>{id}</span> */}
          <span>{reading_time} min read</span>

          <button onClick={() => handelBooksMark(blog)}>
            <CiBookmark />
          </button>
        </div>
      </div>
      <div className='mt-3 mb-7'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='mt-2 mb-4'>{hashtags}</p>
        <button onClick={() => handelReadingTime(id, reading_time)} className='text-[#6047EC] font-semibold border-b-2 border-[#6047EC]'>
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;
