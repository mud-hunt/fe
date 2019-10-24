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

  useEffect(() => {
    if (pusher) {
      setMessageChannel(pusher.subscribe("message-channel"));
    }
  }, [pusher]);

  useEffect(() => {
    if (messageChannel) {
      messageChannel.bind("message", onMessage);
    }
  }, [messageChannel]);

  const onSend = e => {
    e.preventDefault();
    sendMessage(messageBox.current.value);
    messageBox.current.value = '';
  };

  return (
    <>
      <ChatTitle>
        <h3>Chat</h3>
      </ChatTitle>
      <ChatContent ref={chatBox}>
        {messages.map(message => {
          if (message.type === 'message') {
            return (
              <Message>
                <span>{message.username}: </span>
                {message.message}
              </Message>
            );
          }
          if (message.type === 'update') {
            return <Update>message.message</Update>;
          }
          return null;
        })}
      </ChatContent>
      <MessageBox onSubmit={onSend}>
        <input type="text" placeholder="Message..." ref={messageBox} />
        <input type="submit" value="Send" />
      </MessageBox>
    </>
  );
};

export default Chat;

const ChatTitle = styled.div`
  background:white h3 {
    color: #ff7577;
  }
`;

const ChatContent = styled.div`
  color: white;
  height: 20rem;
  overflow-y: scroll;
  padding-left: 5px;
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
`;
