import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type UserData = {
  id?: string;
  name?: string;
  bio?: string;
  skills?: string[];
  email?: string;
  Expertise?: string[];
  phone_number?: string;
  username?: string;
};

const ProfileHeader = () => {
  const [userData, setUserData] = useState<UserData>({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5171/api/user/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <header>
      <div className="container">
        {userData && (
          <div className="profile">
            <div className="profile-image">
              <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
            </div>
            <div className="profile-user-settings">
              <h1 className="profile-user-name"> Senorita </h1>
              <button className="btn profile-edit-btn">Edit Profile</button>
              <button className="btn profile-settings-btn" aria-label="profile settings">
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>
            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count"> 1000 </span>  Followers
                </li>
                <li>
                  <span className="profile-stat-count"> 0</span> Following
                </li>
              </ul>
            </div>
            <div className="profile-bio">
              <p>
                <span className="profile-real-name"> Senorita </span> a Charismatic Innovator.
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default ProfileHeader;
