import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    { sender: "bot", text: "Hello! How can I help you today?", time: new Date().toLocaleTimeString() },
  ],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;