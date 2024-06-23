import React, { useContext, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Box} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Typography, List,ListItem } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";
import '../global/topBar.css'
import useMediaQuery from "@mui/material/useMediaQuery";

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { motion } from "framer-motion";


const Item = ({ title, to, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem active={selected === title} style={{ color: colors.grey[100], listStyleType: 'none'}} onClick={() => setSelected(title)}>
            <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>{title}</Typography>
            </Link>
      </MenuItem>
    );
  };


const TopBar = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [selected, setSelected] = useState("Home");

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };



    return (    
        <div className="navbar">
            <div>
                <ul>
                    <li>
                        <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography>JCPerez</Typography>
                        </Link>
                    </li>
                </ul>
            </div>

            <Box>
                { isNonMobile ? (
                <ul>
                    <li><Item title="Home" to="/Home" selected={selected} setSelected={setSelected} /></li>
                    <li><Item title="About" to="/About" selected={selected} setSelected={setSelected} /></li>
                    <li><Item title="Experience" to="/Experience" selected={selected} setSelected={setSelected} /></li>
                    <li><Item title="Contact" to="/Contact" selected={selected} setSelected={setSelected} /></li>
                </ul> ):       
                (<Box className="fixed-bottom-box" display="flex" justifyContent="center" alignItems="center" sx={{backgroundColor:"black"}}>
                    <Box flex="1">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ scale: selectedItem === "home" ? 2 : 1 }}
          onClick={() => setSelectedItem("home")}
        >
          <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <HomeIcon style={{color:"white"}}/>
          </Link>
        </motion.div>
      </Box>

      <Box flex="1">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ scale: selectedItem === "about" ? 2 : 1 }}
          onClick={() => setSelectedItem("about")}
        >
          <Link to="/About" style={{ textDecoration: 'none', color: 'inherit' }}>
            <InfoIcon style={{color:"white"}}/>
          </Link>
        </motion.div>
      </Box>

      <Box flex="1">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ scale: selectedItem === "experience" ? 2 : 1 }}
          onClick={() => setSelectedItem("experience")}
        >
          <Link to="/Experience" style={{ textDecoration: 'none', color: 'inherit' }}>
            <WorkIcon style={{color:"white"}}/>
          </Link>
        </motion.div>
      </Box>

      <Box flex="1">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ scale: selectedItem === "contact" ? 2 : 1 }}
          onClick={() => setSelectedItem("contact")}
        >
          <Link to="/Contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ContactMailIcon style={{color:"white"}}/>
          </Link>
        </motion.div>
      </Box>

              </Box>)
            }
            </Box>

            <Box style={{ display: "flex" }}>
                {/* <Box>
                     <Button variant="contained" color="primary">Home</Button>
                </Box> */}

                <Box>
                     <IconButton onClick={colorMode.toggleColorMode}>
                         {theme.palette.mode === "dark" ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
                     </IconButton>
                 </Box>
            </Box>
        </div>
    );
};

export default TopBar;
