import * as C from "@chakra-ui/react"

const FormPessoal = () => {
    return(
        
        <C.VStack spacing={5}>
            <C.Heading> Cadastro </C.Heading>
            <C.Input type="email" placeholder ="Insira seu e-mail"/>
            <C.Input type="text" placeholder ="Insira seu nome"/>
            <C.Input type="text" placeholder ="Insira seu CPF"/>
            <C.Input type="text" placeholder ="Insira seu telefone"/>
            <C.RadioGroup>
                <C.Stack direction='row'>
                    <C.Radio value='M'>Masculino</C.Radio>
                    <C.Radio value='F'>Feminino</C.Radio>
                </C.Stack>
            </C.RadioGroup>
        </C.VStack>
        
       
    )
}

export default FormPessoal