import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "15b0baf6-1f06-4c54-a23d-3f46f16bce5c",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem('username',username)
      localStorage.setItem('password',password)
      window.location.reload()
    } catch (e) {
      setError('Invalid credentials.')
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <div className="title">Chat Application</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="Submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
