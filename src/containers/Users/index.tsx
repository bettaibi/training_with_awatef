import React, { useEffect, useState } from 'react';
import UserTable from '../../components/UserTable';
import UserDetails from '../../components/UserDetails';
import UsersCSS from './Users.module.css'
import Header from '../../components/Header';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const Users: React.FC = function(){
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
         <Header />
   
    <div className={UsersCSS.container}>
    
      <div className={UsersCSS.userTableContainer}>
        <UserTable users={users} onSelectUser={setSelectedUser} />
      </div>
      <div className={UsersCSS.userDetailsContainer}>
        {selectedUser && <UserDetails user={selectedUser} />}
      </div>
    </div>
    </div>
  );
};

export default Users;