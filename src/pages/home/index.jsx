import React, {useState, useEffect  } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import FiArrowDownCircle from "@mui/icons-material/Download";
import TypingAnimation from "./typingAnimation";
import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";
import CV from "../../data/John Carlo Perez.pdf";

import GIF from "../../images/AR-green-unscreen.gif"
import Sidegif from "../../images/side.gif"

import "./index.scss";
import { Gif } from "@mui/icons-material";

const devtextVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};



const Home = () => {
  const theme = useTheme();
  const [refreshKey, setRefreshKey] = useState(0);

  

  const refreshGif = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    // Increment refreshKey when the component mounts or reloads
    refreshGif();
  }, []);

  return (
    <motion.section>
      <div className="container">
        <motion.div
          className="devtext"
          variants={devtextVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={devtextVariants}>
            <TypingAnimation messages={["HI, I AM CARLO", "WELCOME TO MY WEBSITE"]} />
          </motion.h1>
          <motion.h3 variants={devtextVariants}>A Full-Stack Developer</motion.h3>
          <motion.div variants={devtextVariants}>
            <a download="John Carlo Perez CV.pdf" href={CV} aria-label="Download CV">
              <Button variant="contained" color="primary">
                <FiArrowDownCircle />
                <span> Download CV </span>
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <div className="devimg">
          <motion.div
            className="devimage"
            initial={{ opacity: 0, x: 500}}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 2, delay: 0.5 , type:"spring"}}
            drag
          >
            <motion.img
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                dragSnapToOrigin
              src={theme.palette.mode === "dark" ? developerLight : developerDark}
              alt="Developer"
            />
          </motion.div>
        </div>

        <motion.div className="slidingtext" variants={sliderVariants} initial="initial" animate="animate">
          FullStack Developer
        </motion.div>

{/*         
            <motion.div style={{position:"fixed", bottom:"0", left:"0" }}
                            initial={{ opacity: 1, scale: .001, bottom: 0}}
                            animate={{ opacity: 1, scale: 3, bottom: "-100%"}}
                            transition={{ duration: 30}}
                            drag
            >
                <motion.img src={Gif} height="300px" width="300px" drag></motion.img> */}

{/* 
                <motion.div style={{position:"fixed", bottom:"-1%", left:"0" }}
                            initial={{ opacity: 1, bottom: 0}}
                            animate={{ opacity: 1,bottom: "0"}}
                            transition={{ duration: 1}}
                            drag
            >
                <button onClick={refreshGif}>Refresh GIF</button>
                <motion.img 
                key={refreshKey} 
                src={`${Sidegif}?${refreshKey}`}
                height="300px" width="300px" drag></motion.img>
            </motion.div> */}

      </div>
    </motion.section>
  );
};

export default Home;
