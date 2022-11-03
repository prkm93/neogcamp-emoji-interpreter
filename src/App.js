import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [emoji, setEmoji] = useState("translation will appear here...");
  const [isFound, setIsFound] = useState(false);
  const [ifSearched, setIfSearched] = useState(false);
  const emojis = {
    "😃": "grining",
    "😉": "wink",
    "😘": "kiss",
    "❤️": "heart",
    "👍": "ThumbsUp",
    "🔥": "Fire",
    "😟": "worried",
    "😂": "laughing",
    "😢": "crying",
    "😮": "surprise",
    "😇": "angel",
    "😡": "angry",
    "😈": "evil or devil",
    "😬": "nervous or awkward",
    "🐓": "chicken",
    "🌹": "rose",
    "💔": "broken heart"
  };

  useEffect(() => {
    if (isFound === false && ifSearched === true) {
      setEmoji("no results found!");
    }
  }, [isFound, ifSearched]);

/**
 *  functon for searching emojis
 * @param {*} e event parameter
 */
  const emojiSearchHandler = (e) => {
    setIsFound(false);
    setIfSearched(true);
    const symbol = e.target.value;
    Object.keys(emojis).forEach((item) => {
      if (item === symbol) {
        setEmoji(item);
        setIsFound(true);
        console.log("isFound inside", isFound);
      }
    });

    if (symbol === "") {
      setIfSearched(false);
      setEmoji("translation will appear here...");
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
      <p className={emoji.length > 2 ? "emoji-text": "emoji-result"}>
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