import {createTheme, ThemeProvider} from '@mui/material/styles'

import {BrowserRouter as Router , Route, Routes , Link } from 'react-router-dom'
import Signin from './Components/Signin';


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
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Signin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
