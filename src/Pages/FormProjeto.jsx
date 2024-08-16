import * as C from "@chakra-ui/react"

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
            <C.Heading>Projeto</C.Heading>
            <C.Input type="text" placeholder ="Insira o projeto"/>
            <C.Input type="text" placeholder ="Área de atuação"/>
            <C.Input type="text" placeholder ="Coordenador/Professor"/>
            <C.Stack spacing={5} direction='row'>
                <C.Checkbox Disabled >
                    CETCC
                </C.Checkbox>
                <C.Checkbox Disabled >
                    CETAFEST
                </C.Checkbox>
                <C.Checkbox Disabled >
                    CETICC
                </C.Checkbox>
                <C.Checkbox Disabled >
                    CETAFAJU
                </C.Checkbox>
            </C.Stack>
        </C.VStack>
    )
}



export default FormProjeto