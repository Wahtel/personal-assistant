import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: "Chat",
  initialState: {
    responses: [],
    fetchingResponse: false,
    error: null,
    messages: [
      { type: "user", message: "Hello" },
      { type: "chat", message: "Hello" },
      { type: "user", message: "Hello" },
      { type: "chat", message: "Hello" },
      { type: "user", message: "Hello" },
      {
        type: "chat",
        message:
          "Very Very Very Very Very Very Very Very long hello Very Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long helloVery Very Very Very Very Very Very Very long hello",
      },
      { type: "user", message: "Hello" },
      { type: "chat", message: "Hello" },
      { type: "user", message: "Hello" },
      { type: "chat", message: "Hello" },
      { type: "user", message: "Hello" },
      {
        type: "chat",
        message: "Very Very Very Very Very Very Very Very long hello",
      },
      { type: "user", message: "Hello" },
      { type: "chat", message: "Hello" },
      { type: "user", message: "Hello" },
      { type: "chat", message: "Hello" },
      { type: "user", message: "Hello" },
      {
        type: "chat",
        message: "Very Very Very Very Very Very Very Very long hello",
      },
    ],
  },
  reducers: {
    fetchResponse: (state) => {
      state.fetchingResponse = true;
    },
    fetchResponseSuccess: (state, action) => {
      const { payload } = action;
      console.log(payload, "payload");
      state.fetchingResponse = false;
      console.log(payload["gpt-completion"], "gpt-completion");
      console.log(payload["transcription"], "transcription");
      console.log("====================================");
      state.messages = [
        ...state.messages,
        { type: "user", message: payload["transcription"] },
        { type: "chat", message: payload["gpt-completion"] },
      ];
    },
    fetchResponseFailure: (state, action) => {
      const { payload } = action;
      state.error = payload;
    },
  },
})

// // Action creators are generated for each case reducer function
// export const { fetchResponse, fetchResponseSuccess, fetchResponseFailure } = chatSlice.actions

// export default chatSlice.reducer

const { actions, reducer } = chatSlice
export const { fetchResponse, fetchResponseSuccess, fetchResponseFailure } = actions;
export default reducer;