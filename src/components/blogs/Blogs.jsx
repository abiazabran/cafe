import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({ handelBooksMark, handelReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blog.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className='w-2/3'>
      {blogs.map((blog) => (
        // eslint-disable-next-line react/jsx-key
        <Blog key={blog.id} blog={blog} handelBooksMark={handelBooksMark} handelReadingTime={handelReadingTime} />
      ))}
    </div>
  );
};

export default Blogs;
