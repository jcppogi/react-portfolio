import React, { useState } from 'react';
import { Box } from "@mui/material";
// import { Logos } from './logos';
import Profile1 from '../../images/xml-original.svg';
import { devLogo } from '../../data/devLogo';
import { motion } from 'framer-motion';


const Skills = () => {
    const [logo] = useState(devLogo);

    return (
        <Box>
            <Box>
                <motion.div>
                    <motion.h1 style={{textAlign:"center"}}
                        animate={{
                        scale: [1, 1.1, 1.2, 1.1, 1],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        y: [200, -50, 0],
                        }}    
                        transition={{
                            duration: 1,
                        }}
                    >Skills
                    
                    </motion.h1>
                </motion.div>
            </Box>

            <Box display="flex" flexWrap="wrap"  gap="10" justifyContent="center" alignItems="center" style={{padding:"0px 100px"}}>
                {
                logo.map((logos, index) =>(
                    <motion.div key={logos.id}
                      animate={{
                        scale: [1, 1.1, 2, 1, 1],
                        //rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        y: [900, 150, 100, -50, 0],
                      }}    
                      transition={{
                        duration: 1,
                        delay: index * .1,
                      }}>
                        <motion.div 
                            whileHover={{ scale: 2, rotate: [0, 20, -20, 20, 0]}}
                            animate={{ scale: 1, rotate: 0 }}
                        >
                            <Box style={{padding:"30px", margin:"20px;" }}>
                                <img alt={logos.alt}  src={logos.path} key={logos.id} height="50px"></img>
                            </Box>
                        </motion.div>
                    </motion.div>
                ))
                }
            </Box>

        </Box>       
    );
};

export {Skills};
