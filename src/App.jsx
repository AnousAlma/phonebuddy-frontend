import { Box } from '@chakra-ui/react'
import './App.css'
import Hero from './pages/Hero'
import Navbar from './pages/Navbar'
import Search from './pages/Search'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Box mb={20}>
        <Navbar />
        <Hero />
        <Search />
      </Box>
      <Footer />
    </>
  )
}

export default App
