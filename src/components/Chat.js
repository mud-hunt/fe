import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { sendMessage } from '../authHandlers/authHandlers';

const Chat = (props) => {
  const { pusher } = props;
  const [messageChannel, setMessageChannel] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (pusher) {
      setMessageChannel(pusher.subscribe('message-channel'));
    }
  }, [pusher]);

  const onSend = e => {
    e.preventDefault();
    
  }

  return (
    <>
      <ChatTitle>
        <h3>Chat</h3>
      </ChatTitle>
      <ChatContent>
        {messages.map(message => {
          return (
            <Message>
              <span>{message.username}</span>
              {message.message}
            </Message>
          );
        })}
      </ChatContent>
      <MessageBox onSubmit={onSend}>
        <input
          type='text'
          placeholder='Message...'
        />
        <input
          type='submit'
          value='Send'
        />
      </MessageBox>
    </>
  );
}

const ChatTitle = styled.div`
    background:white
    h3{
        color:#ff7577;
    }
`;

const ChatContent = styled.div`
    color:white;
    height: 20rem;
    overflow-y: scroll;
    padding-left:5px;
`;

const Message = styled.h4`
  > span {
    font-weight: bold;
  }
`;

const MessageBox = styled.form`
  width: 100%;
  color: white;
`;