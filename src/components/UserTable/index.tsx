
import UserTableCSS from './UserTable.module.css'

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


function UserTable({ users, onSelectUser }: UserTableProps) {
  return (
    <div className={UserTableCSS.userTable}>
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
    </div>
  );
};

export default UserTable;