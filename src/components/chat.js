import { useState } from 'react';
import { configureAbly, useChannel } from '@ably-labs/react-hooks';
import apiUrl from "../apiConfig";
import { useAuth } from '../providers/authProvider';

configureAbly({ authUrl: apiUrl + '/ably-auth' });

function Chat() {
  const { user } = useAuth();

  const [messages, setMessages] = useState([]);
  const [sendMessage, setSendMessage] = useState('');
  const [channel, ably] = useChannel('test-channel', (message) => {
    console.log(message);
    setMessages((prev) => [...prev, message]);
  });

  function postMessage() {
    channel.publish('message', { text: sendMessage, sender: user?.email });
    setSendMessage('');
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900">
      <header className="bg-gray-800 text-white px-4 py-2">
        <h1 className="text-lg font-semibold">{user?.email || 'User not logged in'}</h1>
      </header>
      <main className="flex-grow p-4 flex flex-col">
        <div className="flex-grow overflow-y-auto">
          {messages.map((message) => (
            <p key={message.id} className={`p-2 rounded-lg ${message.data.sender === user?.email ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 text-gray-900 mr-auto'} my-2 w-1/3`}>{message.data.text}</p>
          ))}
        </div>
        <div className="flex mt-4">
          <input
            className="flex-grow border-gray-300 rounded-md px-4 py-2 mr-2"
            type="text"
            placeholder="Type a message..."
            value={sendMessage}
            onChange={(e) => setSendMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            onClick={postMessage}
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

export default Chat;
