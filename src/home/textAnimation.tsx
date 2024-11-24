import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextInterface {
  name: string;
  color: string;
}


const TEXTS: TextInterface[] = [
  {name:"Software Engineer", color: "text-red-700"},
  {name:"Frontend Developer", color: "text-green-700"},
  {name:"Backend Developer", color: "text-yellow-700"},
  {name:"DevOps", color: "text-purple-800"},
  {name:"Full Stack Developer", color: "text-orange-500"},
  {name:"Security Specialist", color: "text-blue-800"},
];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={TEXTS[index % TEXTS.length].name}
        initial={{ opacity: 0.1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.1 }}
        className={TEXTS[index % TEXTS.length].color}
      >
        {TEXTS[index % TEXTS.length].name}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedText;
