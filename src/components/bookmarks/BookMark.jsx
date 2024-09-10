const BookMark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className='bg-white rounded-xl p-3 mt-4 font-bold text-xl '>
      <h1>{title}</h1>
    </div>
  );
};

export default BookMark;
