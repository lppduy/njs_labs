import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState('');
  const history = useHistory()


  const handleSubmit = async () => {


    try {
      await axios.post('http://localhost:5001/add-user', { username: username });
      setUsername('');
      history.push('/users');
      history.go(0);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <>
      <header>
        <a href="/">Enter User</a> | <a href="/users">Users</a>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}

export default Home;