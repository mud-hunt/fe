import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Chat = (props) => {
  const {pusher} = props;
  let messageChannel;

  useEffect(() => {
    if (pusher) {
      messageChannel = pusher.subscribe('message-channel');
    }
  }, [pusher])
}