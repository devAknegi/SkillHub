const EditProfile = () => {
  return (
    <div className="flex-1 items-center justify-center p-5 overflow-y-auto">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="flex items-center justify-center text-2xl font-bold mb-10 underline">Edit Profile</h1>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-sm font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="p-2 border rounded"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="Name"
              className="p-2 border rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-semibold">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="bio" className="mb-1 text-sm font-semibold">
              Bio
            </label>
            <textarea
              id="bio"
              className="p-2 border rounded"
              placeholder="Write a short bio about yourself"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm font-semibold">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="p-2 border rounded"
              placeholder="Enter your new password"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 text-sm font-semibold">
              Re-enter New Password
            </label>
            <input
              type="password"
              id="password"
              className="p-2 border rounded"
              placeholder="Enter your new password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

