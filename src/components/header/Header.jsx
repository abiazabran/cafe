import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
    <header className='flex justify-between items-center border-b-2 mt-3 py-3'>
      <h1 className='uppercase text-3xl font-bold'> knolwadge cafe</h1>
      <img src={profile} alt='' />
    </header>
  );
};

export default Header;
