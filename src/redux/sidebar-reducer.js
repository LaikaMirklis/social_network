let initialState = {
  friends: [
    {
      id: 1,
      name: "Jane",
      photo:
        "https://i.pinimg.com/564x/d1/91/b1/d191b168816f4868a2da83d6eda75da9.jpg",
    },
    {
      id: 2,
      name: "David",
      photo:
        "https://i.pinimg.com/564x/8b/97/82/8b97820093f89ddb050bd2dd0406c896.jpg",
    },
    {
      id: 3,
      name: "Mark",
      photo:
        "https://i.pinimg.com/564x/36/a2/25/36a2253a015094c8d449e3b5da3def2f.jpg",
    },
  ],
};

export const sidebarReducer = (state = initialState, action) => state;

export default sidebarReducer;
