import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import icon from '../../assests/pics/sharoniconpink.png';
import Avatar from '@mui/material/Avatar';


const About = () => {
  return (
      <Grid container justifyContent="center" padding={2} spacing={2}>
        <Grid item xs={12} md={4}>
          <Avatar alt="pinkicon" src={icon} sx={{width: 1, height: 1}}>
          </Avatar>
        </Grid> 

        <Grid item md={1}></Grid>

        <Grid container justifyContent="center" padding={3} spacing={2}>
        <h1>A Little About Sharon</h1>
        <p>I am a fullstack software engineer/ programmer residing in Irvine, CA. I am devoted to continuous learning and striving to create applications that are accessible to all people.</p>
        <h1>Technologies</h1>
        <p>I have worked with several different indemand technologies such as Node.js, Express.js, SQL, MongoDB, Bootstrap, Tailwind, Bulma, Material UI, React.js to name a few. I am always learning and developing new applications so please check me out on GitHub!</p>
        <h1>I Can Help!</h1>
        <p>If you would like to hire me or think I can help with a project please check out my contact page from the navigation bar. I'd love to hear from you. </p>
      </Grid>
      </Grid> 

      
  )
}

export default About