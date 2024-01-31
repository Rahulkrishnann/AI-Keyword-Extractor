import { Header, Image, Text } from '@chakra-ui/react';
import logo from '../assets/light-bulb.svg'

const Heading = () => {
  return (
    <>
      <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
      <Header>
        AI KeyWord Extractor
      </Header>
      <Text fontSize={25} textAlign='center'>
        Paste in your text below and we'll extract the keywords for you
      </Text> 
    </>
  )
}

export default Heading