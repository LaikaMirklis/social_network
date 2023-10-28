import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  // private
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🌿✨ Good morning from the heart of the forest! The sprites are painting dewdrops on leaves today, and the dryads are humming ancient melodies. It's a perfect start to the day. #ForestLife #NatureMagic",
          likeCount: 20,
        },
        {
          id: 2,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🧚‍♂️🍃 Met a lively group of pixies today, dancing under the moonlight. They challenged me to a dance-off! Dancing with fireflies and moonbeams, what an enchanting night! 💃🌙 #PixieParty #MoonlitDance",
          likeCount: 45,
        },
        {
          id: 3,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🦌🌲 Spotted a majestic centaur deep in the forest, offering wisdom about the balance of nature. His stories of ancient times and prophecies kept me mesmerized for hours. #CentaursWisdom #ForestEncounter",
          likeCount: 35,
        },
        {
          id: 4,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🌳🍂 The ancient oak tree whispered secrets to me today. It shared tales of the Green Man and his enduring bond with our woodland realm. Nature's wisdom is boundless. 🌿🧙‍♂️ #GreenMan #AncientWisdom",
          likeCount: 54,
        },
        {
          id: 5,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🌄🍁 The sunrise painted the sky with hues of pink and gold. Satyrs played their flutes, filling the forest with sweet melodies. Mornings like these remind me of the magic of our world. 🌅🎶 #SunriseSerenade #ForestMagic",
          likeCount: 64,
        },
        {
          id: 6,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🧝‍♀️🌺 Visited the nymphs by the river today. They sang songs that made the flowers bloom in harmony. Their voices are a balm to the soul. 🎶🌼 #NymphsMelody #RiverSongs",
          likeCount: 32,
        },
        {
          id: 7,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message: `🦉🌲 The wise old owl taught me a new forest riddle today. I'll share it with you all: "What has roots as nobody sees, Is taller than trees, Up, up, it goes, And yet never grows?" Can you guess? 🤔 #ForestRiddles #NaturePuzzles`,
          likeCount: 52,
        },
        {
          id: 8,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🌟🌙 Had a magical encounter with the Leshy today. He playfully disguised the path, and I had to solve his riddles to find my way home. Forest adventures are always full of surprises! 🌳🍂 #LeshyGames #ForestAdventures",
          likeCount: 44,
        },
        {
          id: 9,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🌿🦋 Spent the afternoon with the gnomes in their underground workshops. Their craftsmanship is unparalleled, and they shared the art of weaving dreams into forest tapestries. 🪡✨ #GnomishCrafts #DreamWeavers",
          likeCount: 34,
        },
        {
          id: 10,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            " 🌄🏞️ Witnessed a mesmerizing procession of treefolk today. Their slow, majestic strides filled the forest with a sense of ancient wisdom and protection. 🌳🌲 #TreefolkGathering #GuardiansOfTheForest",
          likeCount: 46,
        },
        {
          id: 11,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🌌🌟 Stargazing with the sylvan beasts tonight. The chimera's eyes shimmered like constellations, and the jackalope shared stories of celestial wonders. Nights in the forest are pure magic. ✨🌌 #StarryNights #ForestStargazing",
          likeCount: 45,
        },
        {
          id: 12,
          name: "@EnchantingElf",
          avatar:
            "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
          message:
            "🌸🌊 A magical surprise by the river! Merfolk surfaced briefly, singing hauntingly beautiful songs. Their voices echoed in the forest, leaving an enchantment in the air. 🧜‍♀️🎶 #MerfolkMelodies #RiverMagic",
          likeCount: 35,
        },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
        { id: 1, userId: 0, message: "Hello:)" },
        { id: 2, userId: 1, message: "How is your it-kamasutra?" },
        { id: 3, userId: 0, message: "Yo" },
      ],
      newMessageBody: "",
    },

    sidebar: {
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
    },
  },
  _callSubscriber() {},

  // methods that don't change _state
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  // methods that change _state
  dispatch(action) {
    // debugger;
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber();
  },
};

export default store;
