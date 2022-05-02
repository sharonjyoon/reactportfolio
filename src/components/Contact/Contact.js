import {useState} from 'react'
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleInputChange = ({target: {name, value}}) => {
    setFormState({ ...formState, [name]: value })
  } 




  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <h1>Contact Me</h1>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={7}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Full Name</InputLabel>
              <Input 
              name="name"
              onChange={handleInputChange}
              aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">We'll never share your info.</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item spacing={4} padding={2}></Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={7}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input 
              name="email"
              onChange={handleInputChange}
              aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
          <Grid item justifyContent="center" xs={12} md={8} lg={7}>
            <TextField
              label="Leave Your Message Here"
              multiline
              rows={4}
              fullWidth
              name="message"
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button>Submit</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact