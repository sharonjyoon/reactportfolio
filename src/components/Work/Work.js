import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '../Card'

const Work = () => {
  let projects = [{
    title: 'Amiibo Locator',
    github: 'https://bsandfer.github.io/amiibo-locator/',
    heroku: 'Not deployed on heroku',
    image: 'https://github.com/sharonjyoon/sharonjyoon.github.io/blob/main/images/amiibo%20locator.png?raw=true',
    description: 'This application will help you find all the amiibo you desire along with all of the information about them in one easy to access app. It has an added bonus of being able to play and shuffle music from Animal Crossing New Horizons.'
    },
    {
      title: 'QuickCook',
      github: 'https://github.com/wreising/Week_8-Project_2-QuickCook',
      heroku: 'https://bootcamp-project-2-quickcook.herokuapp.com',
      image: 'https://github.com/wreising/Week_8-Project_2-QuickCook/raw/main/assets/Screen-Shot-2022-04-04.png',
      description: 'This application will provide the user with various five ingredient recipes that the user can make easily.The application also enables users to input and save their own five ingredient recipes that they would like to share with other users.'
    },
    {
      title: 'Stack Up',
      github: 'https://github.com/ST12345678910/StackUp.git',
      heroku: 'Unable to deploy on Heroku',
      image: 'https://media.discordapp.net/attachments/968243930644754455/970357124062400552/Screen_Shot_2022-05-01_at_9.12.26_AM.png?width=582&height=584',
      description: 'This application is for developers and investors alike. Users can share their projects and get feedback about what other developers and investors think about their creations. It is an unique way to network with others and get ideas out there for the world to see. See how you stack up against the rest!'
    },
    {
      title: 'Weather Dashboard',
      github: 'https://sharonjyoon.github.io/Weather-Dashboard/',
      heroku: 'Not deployed on Heroku',
      image: 'https://github.com/sharonjyoon/Weather-Dashboard/blob/main/assets/Weather%20dashboard%20image.png?raw=true',
      description: 'This application will allow the user to search for any city they desire and the results will display a five day forecast for that city. There is also valuable information such as UV index and windspeed. The application will also save your search history so you can look back and easily click the cities you searched before.'
    },
    {
      title: 'Day Planner',
      github: 'https://sharonjyoon.github.io/Day-Planner/',
      heroku: 'Not deployed on Heroku',
      image: 'https://github.com/sharonjyoon/Day-Planner/blob/main/Assets/day%20planner%20img.png?raw=true',
      description: 'This application is handy for users that want to plan out their work day on a webpage that will save their information until the user is ready to delete. The information will save unless otherwise directed and the user is ready to plan a new day at the office.'
    },
    {
      title: 'Note Taker',
      github: 'https://sharonjyoon.github.io/Note-Taker/',
      heroku: 'Not yet deployed on Heroku',
      image: 'https://github.com/sharonjyoon/Note-Taker/blob/main/Assets/notetakerapp.png?raw=true',
      description: 'Take notes and save them all in one neat place in this app. This is perfect for anyone wishing to take quick notes while online. This application will allow users to write their notes and save them with labels utilizing technologies such as node.js and Express.js'
    }
]

  return (
    <>
      <Grid container justifyContent="center">
        <h1>My Work</h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent="center">

       {projects.map(project => 
          <Grid item>
            <Card title={project.title} github={project.github} heroku={project.heroku} image= {project.image} description= {project.description}></Card>
            </Grid>
        )} 
      </Grid>
    </>
  )
}

export default Work