import { useState } from "react";
import "./App.css";

export default function App() {
  const [emoji, setEmoji] = useState("translation will appear here...");
  const emojis = {
    "😃": "grining",
    "😉": "wink",
    "😘": "kiss",
    "❤️": "heart",
    "👍": "ThumbsUp",
    "🔥": "Fire",
    "😟": "worried"
  };

  const emojiSearchHandler = (e) => {
    const symbol = e.target.value;
    Object.keys(emojis).forEach((item) => {
      if (item === symbol) {
        setEmoji(item);
        console.log(item);
      }
    });

    if (e.target.value === "") {
      setEmoji("translation will appear here");
    }
  };

  return (
    <div className="App">
      <h1>Inside Outt!!</h1>
      <input
        type="text"
        className="input-box"
        placeholder="Search your emoji"
        onChange={(e) => emojiSearchHandler(e)}
      />
      <p className={emoji.length > 2 ? "": "emoji-result"}>
        {emoji}
      </p>
      <h3 className="emoji-output">
        {
          Object.keys(emojis).map((item) => {
            if (item === emoji) {
              return emojis[item];
            } else {
              return null;
            }
          })
        }
      </h3>
      <p>
        {
          Object.keys(emojis).map((item, i) => {
            return (
              <span
                key={i}
                className="emoji-item"
                onClick={() => setEmoji(emojis[item])}
              >
                {item}
              </span>
            );
          })
        }
      </p>
    </div>
  );
}