const LandingPage = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 space-x-5 items-center justify-center min-h-screen sm:pt-20 xl:text-left text-center'>
      <div className='flex flex-col items-center justify-center my-10 md:my-20 lg:ml-20'>
        <h1 className='text-5xl md:text-6xl font-bold mb-8'>
          Transforming Skills <br />
          <span className='font-extralight'>Connecting Aspirations</span>
          <br />
          <span className='span1'>Powering Growth</span>
        </h1>
        <p className='font-thin w-full lg:text-left text-center items-center justify-center px-10 lg:px-0'>
          SkillHub is a dynamic platform designed to connect individuals seeking
          skill development by exchanging skills with those offering their
          expertise.
        </p>
        <div className='mt-10'>
          <button className='px-5 py-3 mx-5 rounded-full border border-pink-700 bg-pink-500 text-black font-medium hover:shadow-[0_0_20px_rgba(192,7,130,0.9)] hover:bg-pink-600'>
            Get Started
          </button>
          <button className='px-5 py-3 mx-5 rounded-full border border-pink-700 hover:shadow-[0_0_10px_rgba(192,7,130,0.6)] hover:border-pink-700'>
            Contact Us
          </button>
        </div>
      </div>
      <div className='lg:flex items-center justify-center hidden'>
        <img
          src='/bg.jpeg'
          alt='background'
          className=' w-[70%] h-[70%] rounded-[70px] border border-white cursor-pointer'
        />
      </div>
    </div>
  );
};

export default LandingPage;
