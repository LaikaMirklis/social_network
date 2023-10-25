const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messages.push({
        id: 4, //state.messages.length + 1
        userId: 0,
        message: body,
      });
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
