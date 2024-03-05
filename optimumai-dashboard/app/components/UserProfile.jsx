import User from "../data/User";

const UserProfile = ({ isOpen }) => {
  return (
    <div className="flex-none items-center mt-8 mb-4">
      <img
        src={User.avatar}
        alt={`${User.username}'s Avatar`}
        className="h-10 w-10 rounded-full m-auto"
      />
      <p
        className={`${
          isOpen ? "block" : "hidden"
        } md:block text-black mt-4 m-auto font-bold text-blue-600`}
      >
        {User.username}
      </p>      
    </div>
  );
};

export default UserProfile;
