import React, { useState } from "react";
import { Box } from "@mui/material";
import Divider from '@mui/material/Divider';
import Profile from '../../images/mypic.png';
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from 'framer-motion';
import { devLogo } from '../../data/devLogo';
import "./techSkills.scss"


const yrsExp = ({yrs}) => {
    const percentage = (yrs / 6) * 100;
    return `${percentage}%`;
}

const TechSkills = () =>{
    const [exp] = useState(devLogo);
    

    return(
            <div className="container">
                 {/* <div className="header">Tech Skills</div> */}
                <div className="wrapper">
                 { exp.map((xp, index) => (
                    <div className="skills">
                        <motion.div  className="logo">
                            <img src={xp.path} ></img>
                            <h5>{xp.alt}</h5>
                        </motion.div>
                        <div className="yrs">
                            <div className="progressbar">
                                <motion.div 
                                   
                                    initial={{x:-700 }}
                                    animate={{x: 0 }} 
                                    transition={{
                                    duration: 1.5,
                                    delay: index * .1,
                                    }}
                                
                                
                                className="totalyrs" style={{width: yrsExp({yrs: xp.exp}) }}>{xp.exp} yrs</motion.div>
                            </div>
                        </div>
                    </div>
                 ))
                 }
                </div>
            </div>
    )
};

export default TechSkills;