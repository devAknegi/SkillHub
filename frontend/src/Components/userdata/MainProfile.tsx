import ProfileHeader from "./ProfileHeader";
import ProfilePage from "./ProfilePage";

function MainProfile() {
    return (
        <div className="bg-bgdark h-full w-full overflow-hidden flex flex-row p-1">
            <div className="flex flex-col flex-1">
                <ProfileHeader />
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    <ProfilePage />
                </div>
            </div>
        </div>
    );
}

export default MainProfile;
