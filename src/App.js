import { useState } from "react";
import "./App.css";

export default function App() {
  const [emoji, setEmoji] = useState("translation will appear here");
  const [emojis, setEmojis] = useState({
    "😃": "grining",
    "😉": "wink",
    "😘": "kiss",
    "❤️": "heart",
    "👍": "ThumbsUp",
    "🔥": "Fire",
    "😟": "worried"
  });

  const emojiSearchHandler = (e) => {
    const word = e.target.value;
    Object.values(emojis).forEach((item) => {
      if (item.toLowerCase().includes(word.toLowerCase())) {
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
      <p>
        {emoji}
        {Object.keys(emojis).map((item) => {
          if (emojis[item] === emoji) {
            return item;
          }
        })}
      </p>
      <p>
        {Object.keys(emojis).map((item, i) => {
          return (
            <span
              key={i}
              className="emoji-item"
              onClick={() => setEmoji(emojis[item])}
            >
              {item}
            </span>
          );
        })}
      </p>
    </div>
  );
}