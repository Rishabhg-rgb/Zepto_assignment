import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onItemClick }) => {
  return (
    <div className="mt-2">
      {users.map((user) => (
        <UserItem key={user.username} user={user} onItemClick={onItemClick} />
      ))}
    </div>
  );
};

export default UserList;
