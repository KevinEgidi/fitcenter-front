import './App.css'
import Landing from './pages/Landing'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Landing />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
