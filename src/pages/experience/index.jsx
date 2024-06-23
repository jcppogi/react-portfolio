import React, { useState, useEffect, useRef  } from "react";
import { Box, Typography } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Divider from '@mui/material/Divider';

import ExpCard from "./expCard";

import { motion, useInView, useAnimation } from 'framer-motion';
import { jobExpData } from '../../data/jobExpData';

import { useMediaQuery } from '@mui/material';







const Experience = () => {

    const isMobile = useMediaQuery('(max-width:820px)'); 
    const [xpdata] = useState(jobExpData);
    
    const contentStyle = (align) => ({
      display: 'flex',
      justifyContent: align,
    });

    return (
        <Box>
            <Box justifyContent="Center" alignContent="center" textAlign="center" paddingTop="10px">
                <Typography></Typography>
                <Divider>Experience</Divider>
            </Box>
            <Box>
            <Timeline position={isMobile ? 'right' : 'alternate'} style={{ justifyContent: isMobile ? "flex-end" : "flex-start" }}>
                {xpdata.map((xp, index) => (
                <TimelineItem key={xp.id}>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={contentStyle(index % 2 === 0 ? 'flex-start' : 'flex-end')}>
                    <ExpCard index={index} xp={xp}/>
                    </TimelineContent>
                </TimelineItem>
                ))}
            </Timeline>
        </Box> 
      </Box>
      );

};

export default Experience;
