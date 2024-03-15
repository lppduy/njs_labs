import { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/users');
        setUsers(response.data.users);
        console.log(users)
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <header>
        <a href="/">Enter User</a> | <a href="/users">Users</a>
      </header>
      <h1>Users</h1>
      {Array.isArray(users) && users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <h1>No Users Found!</h1>
      )}
    </>
  );
}

export default Users;