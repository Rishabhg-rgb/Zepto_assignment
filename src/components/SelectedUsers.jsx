import React from 'react';

const SelectedUsers = ({ selectedUsers, onChipRemove }) => {
  return (
    <div className="flex mt-4">
      {selectedUsers.map((user) => (
        <div key={user.username} className="flex items-center bg-blue-500 text-white p-2 m-1 rounded">
          <img
            src={user.userphoto}
            alt={user.username}
            className="w-6 h-6 rounded-full mr-2"
          />
          {user.username}
          <span
            className="ml-2 cursor-pointer"
            onClick={() => onChipRemove(user)}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
};

export default SelectedUsers;
