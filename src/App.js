import {createTheme, ThemeProvider} from '@mui/material/styles'

import {BrowserRouter as Router , Route, Routes , Link } from 'react-router-dom'
import Signin from './Components/Signin';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/Home';



const theme = createTheme({
  palette:{
    primary:{
      main:"#125fbf"
    },
    secondary:{
      main:"#f0ffff"
    },
    background:{
      default:"f6f7f9"
    },
  },
  typography:{
    fontFamily: "Poppins, serif",
    
  }
  }
)


function App() {
  return (
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
      </ThemeProvider>
  );
}

export default App;
