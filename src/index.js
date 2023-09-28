import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";

let rerenderEntireTree = () => {
  let addPost = store.addPost.bind(store);
  let updateNewPostText = store.updateNewPostText.bind(store);

  let addMessage = store.addMessage.bind(store);
  let updateNewMessageText = store.updateNewMessageText.bind(store);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          profilePageFunctions={{ addPost, updateNewPostText }}
          dialogsPageFunctions={{ addMessage, updateNewMessageText }}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
