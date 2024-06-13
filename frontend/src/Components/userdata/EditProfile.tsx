import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();
  const [showEditProfileButton, setShowEditProfileButton] = useState(false);
  const [showResetPasswordButton, setShowResetPasswordButton] = useState(false);

  const handleEditProfileHover = () => {
    setShowEditProfileButton(true);
  };

  const handleEditProfileLeave = () => {
    setShowEditProfileButton(false);
  };

  const handleResetPasswordHover = () => {
    setShowResetPasswordButton(true);
  };

  const handleResetPasswordLeave = () => {
    setShowResetPasswordButton(false);
  };
  const handleEditProfileClick = () => {
    navigate('../profile');
  };

  const handleResetPasswordClick = () => {
    navigate('../profile');
  };

  return (
    <div className="w-full h-full flex-1 items-center justify-center p-5 overflow-y-scroll p-2 scroll-smooth border hover:border-richtextdark">
      <header className="md:flex items-center justify-between mt-2 mb-3">
        <div className="flex items-center mb-3">
          <img
            className="rounded-full mr-5 ml-8"
            src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120"
            alt={"userData.username"}
          />
          <div className="flex items-center flex-wrap">
            <h1 className="leading-tight flex-col">
              <a href="./Profile" className="font-bold text-xl">Ankush Negi</a>
              <div className="text-gray-600">@username</div>
            </h1>
          </div>

        </div>
        <div className='mr-8'>
          <a href="./profile" className="bg-richtextdark text-white rounded-lg px-4 py-2 text-md leading-5 hover:no-underline hover:border-white">Go to your profile</a>
        </div>
      </header>

      <div
        className="p-8 rounded shadow-md w-full h-full"
        onMouseEnter={handleEditProfileHover}
        onMouseLeave={handleEditProfileLeave}
      >
        <h1 className="flex items-center text-xl text-richtextdark font-medium mb-10 border-b">PROFILE DETAILS</h1>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="Name" className="mb-1 text-md font-medium  text-white">
              Name
            </label>
            <input
              type="text"
              id="Name"
              className="bg-transparent text-white p-2 border rounded-lg hover:border-richtextdark focus:border-richtextdark focus:outline-none text-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-md font-medium  text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-transparent text-white p-2 border rounded-lg hover:border-richtextdark focus:border-richtextdark focus:outline-none text-md"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob" className="block text-md font-medium  text-white">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="bg-transparent text-white p-2 border rounded-lg hover:border-richtextdark focus:border-richtextdark focus:outline-none text-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-md font-medium  text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent text-white p-2 border rounded-lg hover:border-richtextdark focus:border-richtextdark focus:outline-none text-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bio" className="mb-1 text-md font-medium  text-white">
              Bio
            </label>
            <textarea
              id="bio"
              className="bg-transparent text-white p-2 border rounded-lg hover:border-richtextdark focus:border-richtextdark focus:outline-none text-md"
              placeholder="Write a short bio about yourself... 😊"
            />
          </div>

          <div className="flex items-center justify-center ">
            {showEditProfileButton && (
              <button onClick={handleEditProfileClick}
              type="submit"
              className="bg-richtextdark text-white py-2 px-4 rounded-xl hover:bg-richtextdark transition"
            >
              Save Details
            </button>
            )}
          </div>
        </form>
      </div>
      <div
        className="p-8 rounded shadow-md w-full h-full"
        onMouseEnter={handleResetPasswordHover}
        onMouseLeave={handleResetPasswordLeave}
      >
        <form className="">
          <div className="pt-10 space-y-6">
            <h1 className="flex items-center text-xl text-richtextdark font-medium mb-10 border-b">RESET PASSWORD</h1>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-md font-medium text-white">
                New Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-transparent text-white p-2 border rounded-lg hover:border-richtextdark focus:border-richtextdark focus:outline-none text-md"
                placeholder="Enter your new password"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-md font-medium  text-white">
                Re-enter New Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-transparent text-white p-2 border rounded-lg hover:border-richtextdark focus:border-richtextdark focus:outline-none text-md"
                placeholder="Enter your new password"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 pb-6">
           {showResetPasswordButton &&( <button onClick={handleResetPasswordClick}
              type="submit"
              className="bg-richtextdark text-white py-2 px-4 rounded-xl hover:bg-richtextdark transition"
            >
              Reset Password
            </button>)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

