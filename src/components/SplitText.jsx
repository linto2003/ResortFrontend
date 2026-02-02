import { motion } from "framer-motion";

const SplitText = ({
  text,
  stagger = 0.04,
  delay = 0,
  y = 20,
  className = ""
}) => {
  const words = text.split(" ");

  return (
    <span className={`split-text ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="split-word">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              className="split-char"
              initial={{ opacity: 0, y }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: delay + i * stagger + j * 0.02,
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </span>
      ))}
    </span>
  );
};

export default SplitText;
