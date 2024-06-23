import React, { useContext, useState,useEffect  } from "react";
import { motion } from 'framer-motion';

const TypingAnimation = ({ messages }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);
  
    useEffect(() => {
      const message = messages[currentIndex];
      let index = 0;
      let interval;
  
      const type = () => {
        interval = setInterval(() => {
          if (isDeleting) {
            const newText = typedText.substring(0, typedText.length - 1);
            setTypedText(newText);
            if (newText === '') {
              setIsDeleting(false);
              clearInterval(interval);
              setCurrentIndex(prevIndex => (prevIndex + 1) % messages.length);
            }
          } else {
            const newText = message.substring(0, typedText.length + 1);
            setTypedText(newText);
            if (newText === message) {
                
                clearInterval(interval);
                interval = setInterval(() => {
                    setIsDeleting(true);
            }, 5000);
            }
          }
        }, 100); // Typing speed
      };
  
      type();
  
      return () => clearInterval(interval);
    }, [messages, currentIndex, isDeleting, typedText]);
  
    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setCursorVisible(prevVisible => !prevVisible);
      }, 500); // Cursor blinking speed
  
      return () => clearInterval(cursorInterval);
    }, []);
  
    return (
      <div style={{ display: 'inline-block' }}>
        <motion.span
          style={{ fontSize: "1.5rem", fontFamily: "Arial, sans-serif" }}
          animate={{ opacity: 1 }} // Animation to make the typed text visible
          transition={{ duration: 0.5 }}
        >
          {typedText}
        </motion.span>
        {/* {cursorVisible && <span>|</span>}  */}
      </div>
    );
  };

  export default TypingAnimation;