import {
    Button,
    Center
} from '@chakra-ui/react'

interface IButtonLoggin {
    login: () => void,
}


export const ButtonLogin = ({ login }: IButtonLoggin) => {

    return (
        <Center>
            <Button onClick={login} colorScheme='blue' size='sm' width='100%' marginTop='10px'>
                LOGIN
            </Button>
        </Center>
    )
}