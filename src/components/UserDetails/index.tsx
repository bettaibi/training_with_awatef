import UserDetailsCSS from './UserDetails.module.css'

interface UserDetailsProps {
  user: User;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
function UserDetails({ user }: UserDetailsProps) {
  return (
    <div className={UserDetailsCSS.details}>
      <h3>{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetails;