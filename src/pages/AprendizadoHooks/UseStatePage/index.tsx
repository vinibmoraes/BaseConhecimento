import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import ButtonBackMenu from "../../../components/ButtonBackMenu"

const UseStatePage = () => {

    const [number, setNumber] = useState(0)

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            bgcolor: "#D2E1DF"
        }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 3 }}>
                <ButtonBackMenu />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", py: 3, gap: 2 }}>
                <Button variant="contained" onClick={() => setNumber(number + 1)}>
                    Aumentar número
                </Button>
                <Typography variant="h5" textAlign="center">
                    {number}
                </Typography>
            </Box>
            <Box sx={{ width: "80%", mx: "auto" }}>
                <Typography sx={{ textAlign: "center", lineHeight: 1.6 }} variant="h5" textAlign="center">
                    useState: Tem como objetivo re-renderizar um dado na tela, pois por padrão uma variável não faz isso. 
                    Logo, se haver um campo que exibe nomes de um array, e eu listar esses nomes, após adicionar um novo através de uma função, 
                    nada vai mudar na tela. A partir do momento que eu uso esse hook, posso passar ele na renderização da tabela como essa 
                    variável e como função de atualizar o estado, assim automaticamente o componente recarrega com as informações de novo, 
                    exibindo o que acabou de ser mudado.
                </Typography>
                
            </Box>
        </Box>
    )
}

export default UseStatePage