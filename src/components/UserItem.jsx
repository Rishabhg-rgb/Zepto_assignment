import React from 'react';

const UserItem = ({ user, onItemClick }) => {
  return (
    <div
      key={user.username}
      onClick={() => onItemClick(user)}
      className="cursor-pointer flex items-center p-2 border border-gray-300 rounded mt-1 hover:bg-gray-100"
    >
      <img
        src={user.userphoto}
        alt={user.username}
        className="w-8 h-8 rounded-full mr-2"
      />
      {user.username}
    </div>
  );
};

export default UserItem;
