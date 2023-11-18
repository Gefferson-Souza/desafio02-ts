import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;

    it('Deve exibir um alert com boas vindas', () => {
        const name: string = 'Gefferson';
        login(name);
        expect(mockAlert).toHaveBeenCalledWith(`Login efetuado com sucesso!\nBoas vindas ${name}`);
    })

    it('Deve exibir boas vindas com outro nome', () => {
        const name: string = 'Natty';
        login(name);
        expect(mockAlert).toHaveBeenCalledWith(`Login efetuado com sucesso!\nBoas vindas ${name}`);
    })

    it('Deve retornar "abc"', () => {
        const name: string = 'Natty';
        login('abc')
        expect(mockAlert).not.toHaveBeenCalledWith(`Login efetuado com sucesso!\nBoas vindas ${name}`);
    })
})