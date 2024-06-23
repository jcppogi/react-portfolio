import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import { motion, useInView } from 'framer-motion';
import "./contact.scss";
import emailjs from '@emailjs/browser';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { useTheme } from "@mui/material/styles";

const variants ={
	initial:{
		y: 500,
		opacity:0
	},
	animate:{
		y:0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		}
	}
}


const Contact = () =>{

	const theme = useTheme();

	const formref = useRef();
	const ref = useRef();
	const isInview = useInView(ref, {margin: "100px"});
	const [error, setError] = useState();


	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs
		  .sendForm('service_tw150qj', 'template_hccwzo8', formref.current, {
			publicKey: 'tFH9pbRw92WDUIhrT',
		  })
		  .then(
			() => {
			  console.log('SUCCESS!');
			},
			(error) => {
			  console.log('FAILED...', error.text);
			},
		  );
	  };

    return(
		<motion.div className="contact-container" 
			ref={ref}
			variants={variants} 
			initial="initial" 
			whileInView="animate"
			>
			<motion.div className="contact-info" variants={variants}>
				<motion.h1 variants={variants}>Let's work together</motion.h1>
				<motion.div className="item" variants={variants}>
					<motion.h2><span><FiMail /> </span>Email</motion.h2>
					<span>Johncarloperez100@gmail.com</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
				
					<h2><span><FiMapPin /> </span>Address</h2>
					<span>Santa Rosa, Laguna</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h2><span><FiPhone/> </span>Mobile Number</h2>
					<span>+639764178948</span>
				</motion.div>
			</motion.div>

			<motion.div className="formContainer">

			<motion.div className="emailSvg"
			initial={{opacity: 1}}
			whileInView={{opacity: 0}}
			transition={{duration: 2}}
			>

				<svg width="450px" height="450px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<motion.path
						strokeWidth={0.2}
						fill="none"
						initial={{pathLength:0}}
						animate={isInview && {pathLength: 1}}
						transition={{delay:0, duration:1}}			
					d="M44 24V9H24H4V24V39H24" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					
					
					<motion.path		
						strokeWidth={0.2}
						fill="none"
						initial={{pathLength:0, opacity:0}}
						animate={isInview && {pathLength: 1, opacity: 1}}
						transition={{delay:0.3, duration:0.4}}
						d="M4 9L24 24L44 9" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
								
					
					<motion.path		
						strokeWidth={0.2}
						fill="none"
						initial={{pathLength:0}}
						animate={isInview && {pathLength: 1}}
						transition={{delay:0, duration:1}}	
						d="M39 29L44 34L39 39" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

					<motion.path
						strokeWidth={0.2}
						fill="none"
						initial={{pathLength:0}}
						animate={isInview && {pathLength: 1}}
						transition={{delay:0, duration:1}}
						d="M30 34L44 34" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					
				</svg>

			</motion.div>




				<motion.form ref={formref} style={{ backgroundColor: theme.palette.background.default}}
				onSubmit={sendEmail}
							initial={{opacity: 0}}
							whileInView={{opacity: 1}}
							transition={{delay: 2, duration: 1}}		
				>
					<TextField   required label="Name" variant="standard" name="name"/>
					<TextField type="email" required label="Email" variant="standard" name="email"/>
					<TextField label="Message" multiline rows={5} maxRows={8} name="message"/>
					<Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
				</motion.form>
			</motion.div>
		</motion.div>
    )
};

export default Contact;