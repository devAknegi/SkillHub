function ProfileHeader() {
  return (
    <div className="mb-8">
      <img
        src ={"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"}
        alt="User Avatar"
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-center">{"Ankush"}</h2>
      <p className="text-gray-500 text-center">Date of Birth: {"05-05-2000"}</p>
    </div>
  );
}

export default ProfileHeader;
