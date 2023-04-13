import React from 'react';
import './index.css'

interface UserTableProps {
  users: User[];
  onSelectUser: (user: User) => void;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}


const UserTable: React.FC<UserTableProps> = ({ users, onSelectUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => onSelectUser(user)}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;