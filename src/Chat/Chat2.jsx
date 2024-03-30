import React, { useEffect, useRef, useState } from "react";
import '../Chat/Chat.css'
import {
  getDatabase,
  onChildAdded,
  push,
  ref,
  set,
  off,
} from "firebase/database";

const Chat2 = () => {
  const [name, setName] = useState("");
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");

  const database = getDatabase();
  const postListRef = ref(database, "posts");

  const updateHeight = () => {
    const el = document.getElementById("chats");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };

  useEffect(() => {
    const handleChildAdded = (data) => {
      setChat((prevChat) => [...prevChat, data.val()]);
      setTimeout(() => {
        updateHeight();
      }, 100);
    };

    onChildAdded(postListRef, handleChildAdded);

    // Cleanup function to remove the listener when component unmounts
    return () => {
      off(postListRef, "child_added", handleChildAdded);
    };
  }, []);

  const sendChat = () => {
    const newPostRef = push(postListRef);
    set(newPostRef, {
      name,
      message: msg,
    });
    setMsg("");
  };
  const buttonRef = useRef(null);
  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      buttonRef.current.click();
    }
  };

  return (
    <div>
      {!name && (
        <div className="top">
          <h1>
            Welcome to the <span>CheeT</span>
          </h1>
          <h2>An Online Chatroom for fun and friends</h2>
          <div className="middle">
            <input
              className="input1"
              type="text"
              placeholder="Enter your name"
              onKeyDown={handleKeyPress}
              onBlur={(e) => setName(e.target.value)}
            />
            <div className="btm2">
              <button
                type="submit"
                ref={buttonRef}
                className="btm22"
                onClick={sendChat}
              >
                Submit Name
              </button>
            </div>
          </div>
        </div>
      )}
      {name && (
        <div className="top2">
          <h1>You: {name}</h1>
          <div id="chats" className="chat-container">
            {chat.map((c, i) => (
              <div
                key={i}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chatbox">
                  <strong>
                   <h1 className="name2"> {c.name}</h1> <br />
                   
                    
                  </strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btm">
            <input
              className="main-inp"
              type="text"
              onInput={(e) => setMsg(e.target.value)}
              value={msg}
              onKeyDown={handleKeyPress}
              placeholder="send message"
            />
            <button ref={buttonRef} type="submit" onClick={sendChat}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat2;
