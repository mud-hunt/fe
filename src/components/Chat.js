import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { sendMessage } from "../authHandlers/authHandlers";

const Chat = props => {
  const { pusher } = props;
  const [messageChannel, setMessageChannel] = useState();
  const [messages, setMessages] = useState([]);
  const messageBox = useRef();
  const chatBox = useRef();

  const onMessage = message => {
    message.type = "message";
    setMessages(state => state.concat([message]));
    chatBox.current.scrollTop = chatBox.current.scrollHeight;
  };

  const onUpdate = update => {
    update.type = 'update'
    setMessages(state => state.concat([update]));
    chatBox.current.scrollTop = chatBox.current.scrollHeight;
  }

  useEffect(() => {
    if (pusher) {
      setMessageChannel(pusher.subscribe("message-channel"));
    }
  }, [pusher]);

  useEffect(() => {
    if (messageChannel) {
      messageChannel.bind("message", onMessage);
      messageChannel.bind("player-move", onUpdate);
    }
  }, [messageChannel]);

  const onSend = e => {
    e.preventDefault();
    sendMessage(messageBox.current.value);
    messageBox.current.value = '';
  };

  return (
    <Container>
      <ChatTitle>
        <h3>Chat</h3>
      </ChatTitle>
      <ChatContent ref={chatBox}>
        {messages.map((message, index) => {
          if (message.type === 'message') {
            return (
              <Message key={index}>
                <span>{message.username}: </span>
                {message.message}
              </Message>
            );
          }
          if (message.type === 'update') {
            return <Update key={index}>{message.message}</Update>;
          }
          return null;
        })}
      </ChatContent>
      <MessageBox onSubmit={onSend}>
        <input type="text" placeholder="Message..." ref={messageBox} />
        <input type="submit" value="Send" />
      </MessageBox>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  width: 100%;
`;

const ChatTitle = styled.div`
  background: white;
  h3 {
    color: #ff7577;
  }
`;

const ChatContent = styled.div`
  color: white;
  height: 20rem;
  overflow-y: scroll;
  padding: 0 2rem;
  margin-bottom: 1rem;

  > p {
    margin-bottom: 0.5rem;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }
`;

const Message = styled.p`
  > span {
    font-weight: 600;
  }
  font-weight: 200;
`;

const Update = styled.p`
  font-style: italic;
  font-weight: 200;
`;

const MessageBox = styled.form`
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;

  > input {
    width: 70%;
    box-sizing: border-box;

    &[type='submit'] {
      width: 28%;
      transition: box-shadow 0.1s ease-in-out;
      box-shadow: 0px 0px 0px transparent;
      &:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
