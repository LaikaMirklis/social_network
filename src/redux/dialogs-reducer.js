const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Jane",
      ava: "https://i.pinimg.com/564x/d1/91/b1/d191b168816f4868a2da83d6eda75da9.jpg",
    },
    {
      id: 2,
      name: "David",
      ava: "https://i.pinimg.com/564x/8b/97/82/8b97820093f89ddb050bd2dd0406c896.jpg",
    },
    {
      id: 3,
      name: "Mark",
      ava: "https://i.pinimg.com/564x/36/a2/25/36a2253a015094c8d449e3b5da3def2f.jpg",
    },
    {
      id: 4,
      name: "Polly",
      ava: "https://i.pinimg.com/564x/2d/57/c3/2d57c383663bcf66bfd86219989fa189.jpg",
    },
    {
      id: 5,
      name: "Rea",
      ava: "https://i.pinimg.com/564x/f4/75/3b/f4753bf03d14a4eb58e602c694d9ff5c.jpg",
    },
    {
      id: 6,
      name: "Nate",
      ava: "https://i.pinimg.com/564x/10/fc/b5/10fcb57a06552fbfe790cd4174c0adf5.jpg",
    },
  ],
  messages: [
    { id: 1, userId: 1, message: "Hi" },
    { id: 2, userId: 0, message: "Hello:)" },
    { id: 3, userId: 1, message: "How is your it-kamasutra?" },
    { id: 4, userId: 0, message: "Yo" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [
          ...state.messages,
          {
            id: 5,
            userId: 0,
            message: body,
          },
        ],
      };
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
