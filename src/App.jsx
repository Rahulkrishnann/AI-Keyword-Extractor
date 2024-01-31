import { Container, Box, Image } from "@chakra-ui/react"
import Heading from "./Components/Header"

const App = () => {
  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
      <Heading />
    </Container>
    
    </Box>
    
  )
}

export default App