import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Menu = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            height: "100vh", 
            bgcolor: "#D2E1DF" 
        }}>
            {/* Título centralizado no topo */}
            <Box sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                py: 3 
            }}>
                <Typography variant="h5">
                    Central de Conhecimento Básico
                </Typography>
            </Box>

            {/* Container das duas boxes lado a lado */}
            <Box sx={{ 
                display: "flex", 
                flexDirection: "row", 
                flex: 1,
                gap: 2,
                px: 2,
                pb: 2
            }}>
                {/* Box da esquerda - Sobre o Projeto */}
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    flex: 1,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 2,
                    p: 3,
                    gap: 3
                }}>
                    <Typography variant="h5" textAlign="center" sx={{ mb: 2 }}>
                        Sobre o Projeto
                    </Typography>
                    <Typography variant="body1" textAlign="center" sx={{ lineHeight: 1.6 }}>
                        Este é um projeto de aprendizado focado em conceitos fundamentais do React e tecnologias relacionadas, onde fiz algumas telas exemplificando o que aprendi,
                        pontuando sobre hooks do React, Redux e Context API, MUI / Material UI, i18n, Yup, React Hook Form e Axios.
                    </Typography>
                    <Typography variant="body2" textAlign="center" sx={{ mt: 2, fontStyle: 'italic' }}>
                        Acesse os exemplos de cada conceito através dos botões!
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2 }}>
                        <Button sx={{ width: "150%" }} variant="contained">Redux e Context API</Button>
                        <Button sx={{ width: "150%" }} variant="contained">MUI / Material UI</Button>
                        <Button sx={{ width: "150%" }} variant="contained">i18n</Button>
                        <Button sx={{ width: "150%" }} variant="contained">Yup e React Hook Form</Button>
                        <Button sx={{ width: "150%" }} variant="contained">Axios</Button>
                    </Box>
                </Box>



                {/* Box da direita - Botões dos Hooks */}
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    flex: 1,
                    gap: 2,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 2,
                    p: 3
                }}>
                    <Box>
                        <Typography variant="h5" textAlign="center" sx={{ mb: 7 }}>
                            Hooks
                        </Typography>
                    </Box>


                    <Button sx={{ width: "40%" }} variant="contained" onClick={() => navigate("/usestatepage")}>UseState </Button> 
                    <Button sx={{ width: "40%" }} variant="contained">UseEffect</Button>
                    <Button sx={{ width: "40%" }} variant="contained">UseRef</Button>
                    <Button sx={{ width: "40%" }} variant="contained">UseContext</Button>
                    <Button sx={{ width: "40%" }} variant="contained">UseReducer</Button>
                    <Button sx={{ width: "40%" }} variant="contained">UseCallback</Button>    
                    <Button sx={{ width: "40%" }} variant="contained">UseMemo</Button>
                    <Button sx={{ width: "40%" }} variant="contained">UseImperativeHandle</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Menu