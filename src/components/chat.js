import { useState } from 'react'
import { configureAbly, useChannel } from '@ably-labs/react-hooks';
import apiUrl from "../apiConfig";
import { useAuth } from '../providers/authProvider';

// We can use a authCallback instead of authUrl for this if we want to make sure
// that only signed-in users use this. Then we can use requireToken on the backend, too.
// Then we'd need to access the user object outside of the Chat component.
// I believe we could use a ref to do that.
configureAbly({ authUrl: apiUrl + '/ably-auth'})

function Chat () {
  const { user } = useAuth()

  const [messages, setMessages] = useState([])
  const [sendMessage, setSendMessage] = useState('')
  // I could put this hook inside of a function that's activated when a user joins a channel
  // Then a user could subscribe and unsubscribe to channels at will
  const [channel, ably] = useChannel('test-channel', (message) => {
    console.log(message)
    setMessages((prev) => [...prev, message])
  })

  // Ably doesn't persist messages, they offer webhooks so we can persist them in our own DB.
  // That's beyond the scope of this hackathon, though. But here is where you implement the webhook:
  // https://ably.com/accounts/33175/apps/56096/integrations#new-rule
  // And here is more info on Ably webhooks: 
  // https://ably.com/docs/general/webhooks, https://sdk.ably.com/builds/ably/specification/main/websocket/#connection


  function postMessage() {
    channel.publish('message', { text: sendMessage })
  }

  return (
    <div>
      <h1>{user?.email || 'User not logged in'}</h1>
      <div className='h-[80vh]'>
      {messages.map((message) => {
      return (
        <p key={message.id}>{message.data.text}</p>
      )
      })}
      </div>
      <input className='outline' type='text' value={sendMessage} onChange={(e) => setSendMessage(e.target.value)} />
      <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline' onClick={postMessage}>Send</button>
    </div>
  )
}

export default Chat