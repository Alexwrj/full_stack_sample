import './App.css';
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Message } from "./components/Message";
import moment from "moment";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const fetchMessages = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/messages`);

      setMessages(data)
    } catch (error) {
      console.error('Error while fetching messaged', error);
    }
  }, []);

  const handleInputMessage = ({ target }) => {
    setInputMessage(target.value);
  }

  const handleSendMessage = () => {
    const newMessage = {
      createdAt: moment().toISOString(),
      message: inputMessage,
      author: 'UserName',
      authorAvatar: 'https://batelle.com/wp-content/uploads/2021/07/cropped-batelle-fav-1-270x270.png',
      authorId: 9999,
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <div className="chat">
      {messages.map(({ id, ...message }) => (
        <Message key={id} {...message} />
      ))}
      <div className="chat_input">
        <input onChange={handleInputMessage} value={inputMessage} type="text" />
        <div onClick={handleSendMessage} tabIndex={0} role="button" className="chat_input__send_button">
          <img alt="send_button" src="/send_icon.svg" />
        </div>
      </div>
    </div>
  );
}

export default App;
