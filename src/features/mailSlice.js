import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   sendMessageIsOpen: false,
//   //   status: 'idle',
// };

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
      console.log('state is true');
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
      console.log('state is false');
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
