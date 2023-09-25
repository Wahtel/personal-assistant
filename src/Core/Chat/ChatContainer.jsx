import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResponse } from './reducer';
import { ChatComponent } from './ChatComponent';

export const ChatContainer = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const messages = useSelector(state => state.chat.messages);
  const fetching = useSelector(state => state.chat.fetchingResponse);

  const sendFile = file => dispatch(fetchResponse({ file }));

  return (
    <ChatComponent
      navigation={navigation}
      sendFile={sendFile}
      messages={messages}
      fetching={fetching}
    />
  );
};
