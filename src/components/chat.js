import { useState } from 'react'
import { configureAbly, useChannel } from '@ably-labs/react-hooks';
import apiUrl from "../apiConfig";
// import { getAblyTokenRequest } from '../api/ably';
// import { useAuth } from '../providers/authProvider';

// We can use a authCallback instead of authUrl for this if we want to make sure
// that only signed-in users use this. Then we can use requireToken on the backend, too
configureAbly({ authUrl: apiUrl + '/ably-auth'})

function Chat () {
  // const { user } = useAuth()
  // if (user?.token) {
  //   configureAbly({ authCallback: async (data, callback) => {
  //     try {
  //       const tokenRequest = getAblyTokenRequest(user)
  //       callback(null, tokenRequest)
  //     } catch (e) {
  //       console.log(e, null)
  //     }
  //   } })
  // }

  const [messages, setMessages] = useState([])
  const [channel, ably] = useChannel('test-channel', (message) => {
    setMessages((prev) => [...prev, message])
  })

  function postMessage() {
    channel.publish('test-message', { text: 'message text'})
  }

  return (
    <div>
      <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline' onClick={postMessage}>Post Message</button>
      <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline' onClick={() => console.log(messages)}>Show messages</button>
    </div>
  )
}

export default Chat