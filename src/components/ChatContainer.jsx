import React from 'react'
import ChatDisplay from './ChatDisplay'
import ChatHeader from './ChatHeader'
import MatchesDisplay from './MatchesDisplay'
import './styles/ChatContainer.css';

function ChatContainer() {
  return (
    <div className='chat-container'>
        
   
    <ChatHeader/>

    <div>
    <button className='match-btn'>Matches</button>
    <button className='chat-btn'>Chat</button>
    </div>

    <MatchesDisplay/>
    <ChatDisplay/>
    </div>
  )
}

export default ChatContainer