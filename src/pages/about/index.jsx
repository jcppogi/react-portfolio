import React, {useRef, useState} from "react";
import { Box } from "@mui/material";
import Divider from '@mui/material/Divider';
import Profile from '../../images/mypic.png';
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useScroll, useSpring } from 'framer-motion';
import { Cover } from './cover';
import { Skills } from './skills';
import { Padding } from "@mui/icons-material";
import TechSkills from "./techSkills";
import "./index.scss";
import Dev from '../../images/dev1.gif';
import { devLogo } from '../../data/devLogo';

import { aboutMeData } from '../../data/aboutMeData';

const yrsExp = ({yrs}) => {
    const percentage = (yrs / 6) * 100;
    return `${percentage}%`;
}


const About = () =>{
    const [logo] = useState(devLogo);
    const [exp] = useState(devLogo);
    const [aboutMe] = useState(aboutMeData);

    const mid = Math.ceil(exp.length / 2);
    const firstHalf = exp.slice(0, mid);
    const secondHalf = exp.slice(mid);

    return(


            <div className="about">

                <section>
                    <div className="about-container">


                        <div  className="aboutsection">
                            <motion.div className="profile"
                                initial={{ opacity: 0, scale: 0.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{  duration: 0.9, delay: 0.2, type:"spring" }}
                            >
                                <img src={Profile} alt="Developer" />
                            </motion.div>     

                            <div className="aboutText">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.1 }}
                                    animate={{ opacity: 1,scale: 1 }}
                                    transition={{ duration: 0.9, delay: 0.2, type:"spring"  }}
                                >
                                    <div>
                                        <p>{aboutMe[0].bio}</p>
                                    </div>

                                </motion.div>           
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="technologies">
                        <div className="header">
                           <h2>Technologies</h2>
                        </div>
                        
                        <div className="techContainer">
                            <div className="devImage"><img src={Dev}></img></div>
                            <div className="TechDetails">
                            {
                            logo.map((logos, index) =>(
                            <img alt={logos.alt}  src={logos.path} key={logos.id}></img>
                            ))
                            }
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section>
                    <div className="skills">
                        <div className="header">
                           <h2>Skills</h2>
                        </div>

                        <div className="skillsContainer">
                            <div className="wrapper">
                            { firstHalf.map((xp, index) => (
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

                            <div className="wrapper">
                            { secondHalf.map((xp, index) => (
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
                    </div>
                </section>
            </div>
    )
};

export default About;