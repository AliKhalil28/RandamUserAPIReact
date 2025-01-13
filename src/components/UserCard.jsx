import React from "react";

function UserCard({ users }) {
  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-gray-300 text-black m-4 p-5 w-80 shadow-lg rounded-lg flex flex-col items-center"
        >
          <img
            className="w-24 h-24 rounded-full object-cover mb-4"
            src={user?.picture?.large}
            alt="User Avatar"
          />
          <div className="text-center">
            <div className="text-xl font-semibold">
              {user.name.title} {user.name.first}
            </div>
            <div className="text-gray-600">{user.location.country}</div>
            <div className="text-gray-500 mt-2">{user.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
