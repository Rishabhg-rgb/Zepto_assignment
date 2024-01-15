import React, { useState } from 'react';
import InputField from './components/InputField';
import UserList from './components/UserList';
import SelectedUsers from './components/SelectedUsers';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [availableUsers, setAvailableUsers] = useState([
    { username: 'John', userphoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' },
    { username: 'Alice', userphoto: 'https://images.unsplash.com/photo-1590541490155-0e1853825612?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMjQzODA2fHxlbnwwfHx8fHw%3D' },
    { username: 'Bob', userphoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' },
    { username: 'Eva', userphoto: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' },
    { username: 'Charlie', userphoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' },
    { username: 'Grace', userphoto: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' },
    { username: 'David', userphoto: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' },
    { username: 'Sophie', userphoto: 'https://images.unsplash.com/photo-1525357816819-392d2380d821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' },
    { username: 'Ryan', userphoto: 'https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' },
    // Add more user objects as needed
  ]);
  const [displayItems, setDisplayItems] = useState(false)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setAvailableUsers(availableUsers.filter((availableUser) => availableUser !== user));
    setInputValue('');
  };

  const handleChipRemove = (user) => {
    setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser !== user));
    setAvailableUsers([...availableUsers, user]);
  };

  return (
    <div className="w-screen mx-auto mt-8">
      <div className="flex w-fit mx-auto flex-col items-start">
        <div className="flex items-center">

          <SelectedUsers selectedUsers={selectedUsers} onChipRemove={handleChipRemove} />

        </div>

        <div className="mt-4 mx-auto">
          <InputField value={inputValue} setDisplay={setDisplayItems} onChange={handleInputChange} />
          {displayItems &&
            <UserList
              users={availableUsers.filter((user) => user.username.toLowerCase().includes(inputValue.toLowerCase()))}
              onItemClick={handleUserClick}
            />}
        </div>


      </div>
    </div>
  );
};

export default App;
