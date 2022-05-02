import Navbar from './components/Navbar'
import CssBaseline from '@mui/material/CssBaseline';
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
  <div>
    <CssBaseline />
    <Navbar/>
    
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App;
