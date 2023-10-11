import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-textdark">This is the profile page for this user:</h1>
      <h1 className="text-richtextdark">{id}</h1>
    </div>
  );
};

export default Profile;
