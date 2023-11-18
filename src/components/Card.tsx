import {
  Center,
  Input,
  Box,
  Button
} from '@chakra-ui/react'

import { login } from '../services/login';
import { ButtonLogin } from './ButtonLogin'


export const Card = () => {
  const name:string = 'Gefferson';
  return (
      <Box margin='0 auto' maxWidth='768px' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
              <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <ButtonLogin 
            login={() => login(name)}
          />
      </Box>
  )
}