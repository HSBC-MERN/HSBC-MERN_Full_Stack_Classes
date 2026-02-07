import React from 'react'
import ChatContainer from './ChatContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
        <h1 className='text-center bg-success p-3 m-3'>Chat With AI</h1>
      <ChatContainer/>
    </div>
  )
}

export default App
