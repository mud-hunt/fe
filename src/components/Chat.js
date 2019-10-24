import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Chat = (props) => {
  const { pusher } = props;
  const [messageChannel, setMessageChannel] = useState();

  useEffect(() => {
    if (pusher) {
      setMessageChannel(pusher.subscribe('message-channel'));
    }
  }, [pusher]);
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