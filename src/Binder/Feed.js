import { Button } from "antd";
import React, { useState, useEffect } from "react";
import Chat from "../component/Chat";
import Home from "../component/Home";
import Notification from "../component/Notification";

const Feed = () => {
  const [homeBtn, setHomeBtn] = useState(true);
  const [chatBtn, setChatBtn] = useState(false);
  const [notifyBtn, setNotifyBtn] = useState(false);

  const homeChn = () => {
    setHomeBtn(true);
    setChatBtn(false);
    setNotifyBtn(false);
    console.log("Home");
    console.log(homeBtn);
  };

  const chatChn = () => {
    setHomeBtn(false);
    setChatBtn(true);
    setNotifyBtn(false);
    console.log("Chat");
    console.log(chatBtn);
  };

  const notifyChn = () => {
    setHomeBtn(false);
    setChatBtn(false);
    setNotifyBtn(true);
    console.log("Notification");
    console.log(notifyBtn);
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Button style={{ marginRight: 10, width: 100 }} onClick={homeChn}>
          Home
        </Button>
        <Button style={{ marginRight: 10, width: 100 }} onClick={chatChn}>
          Chat
        </Button>
        <Button style={{ marginRight: 10, width: 100 }} onClick={notifyChn}>
          Notification
        </Button>
      </div>
      <br />

      <div>
        {homeBtn ? (
          <div>
            <div> Home </div>
            <Home />
          </div>
        ) : chatBtn ? (
          <div>
            {" "}
            <div> Chat </div>
            <Chat />{" "}
          </div>
        ) : notifyBtn ? (
          <div>
            {" "}
            <div> Notication </div>
            <Notification />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Feed;
