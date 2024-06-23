import React, { useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion, useInView, useAnimation } from 'framer-motion';
import { jobExpData } from '../../data/jobExpData';
import { useTheme } from "@mui/material/styles";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpCard = ({ index, xp}) => {

  const theme = useTheme();



  const [expanded, setExpanded] = useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };




 

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      style={{ width: "90%", border: "1px solid white", borderRadius:"10px", overflow:"hidden" }}
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      whileHover={{ scale: 1.01 }}
    >
    <Card style={{backgroundColor: theme.palette.background.default, position:"relative"}}>
      <CardHeader
        avatar={
          <motion.div style={{ width: 100, height: 50 }}
           whileHover={{ scale: 1.01,rotate: 10 }}
          >
            <img
              src={xp.client[0].logo}
              alt={xp.client[0].alt}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>
        }
        title={<React.Fragment><b>{xp.company[0].name}</b></React.Fragment>}
        subheader={`${xp.from} - ${xp.to}`}
        titleTypographyProps={{ sx: { textAlign: 'left' } }}
        subheaderTypographyProps={{ sx: { textAlign: 'left' } }}
      />
      <CardContent sx={{ textAlign: 'left', fontSize: "12px" }}>
        {xp.responsibilities.map((res, idx) => (
          <div key={idx}>• {res}</div>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* Additional content goes here */}
        </CardContent>
      </Collapse>
    </Card>
  </motion.div>
  );
};


export default ExpCard;
