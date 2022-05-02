import React from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import './footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <>
    <Grid className="footer" container justifyContent="center" spacing={1} padding={3}>
      <Grid item xs={12} md={3} lg={1}>  
          <a href="https://github.com/sharonjyoon" target={'_blank'}>
            <GitHubIcon></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/sharon-yoon-32788520b/" target={'_blank'}>
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a href="https://www.instagram.com/?hl=en" target={'_blank'} padding={4}>
            <InstagramIcon></InstagramIcon>
          </a>
      </Grid>
    </Grid>

    </>
  )
}

export default Footer