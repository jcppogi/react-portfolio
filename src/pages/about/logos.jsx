import React, { useContext } from 'react';
import { devLogo } from '../../data/devLogo';
import { Box } from "@mui/material";
import Profile from '../../images/xml-original.svg';
import { motion } from 'framer-motion';
const Logos = () => {
    const [logo] = useContext(devLogo);

    return (
        <Box>
            {/* {
                logo.map((logos) =>(
                    <img alt={logos.alt}  src={logos.path} key={logos.id}></img>
                ))
            } */}
            <img src={Profile}></img>
           
        </Box>
    );
};

export {Logos};
