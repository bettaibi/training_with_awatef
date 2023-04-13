import React, { useEffect, useState } from 'react';
import UserTable from '../UserTable';
import UserDetails from '../UserDetails';
import './index.css'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <div className="user-table-container">
        <UserTable users={users} onSelectUser={setSelectedUser} />
      </div>
      <div className="user-details-container">
        {selectedUser && <UserDetails user={selectedUser} />}
      </div>
    </div>
  );
};

export default Users;