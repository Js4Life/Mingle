import { ChatEngine } from "react-chat-engine";
import  ChatFeed  from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {

  if(!localStorage.getItem('username')) {
    return <LoginForm/>
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="15b0baf6-1f06-4c54-a23d-3f46f16bce5c"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );



};

export default App;
