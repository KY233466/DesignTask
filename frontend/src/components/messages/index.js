import { useEffect } from "react";
import BackStory from "./backStory";
import ChatBubble from "./chatBubble";
import Explanation from "./Explanation";
import TypingIndicator from "./TypingIndicator";

import styles from "./index.module.css";

export default function Messages({
  height,
  chatHistory,
  setChatHistory,
  setChoice,
  selectedButton,
  setSelectedButton,
}) {
  useEffect(() => {
    const messageDivs = document.querySelectorAll('[data-role="message"]');
    messageDivs?.forEach((m, index) => {
      const range = document.createRange();
      const text = m?.childNodes[0];
      if (text) {
        range.setStartBefore(text);
        range.setEndAfter(text);
        const clientRect = range.getBoundingClientRect();
        m.style.width = `${clientRect.width}px`;
      }
    });
  }, []);

  const handleButtonClick = (index, message) => {
    setSelectedButton(index);
    setChoice(message);
  };

  const messageHistory = (message, index, length) => {
    switch (message.type) {
      case "text":
        return (
          <ChatBubble
            key={index}
            message={message}
            length={length}
            index={index}
          />
        );
      case "explanation":
        return (
          <Explanation
            key={index}
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
        );
      case "typingIndicator":
        return <TypingIndicator key={index} />;
      default:
        return "";
    }
  };

  return (
    <div style={{ height: height }} className={styles.wrapper}>
      <BackStory />
      <div className={styles.messageWrapper}>
        {chatHistory?.map((message, index) => {
          return messageHistory(message, index, chatHistory.length);
        })}
      </div>
    </div>
  );
}