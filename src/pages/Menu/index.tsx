import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "#D2E1DF",
        paddingBottom: 10,
        paddingTop: 0,
        
      }}
    >
    <Typography variant="h5" textAlign="center" sx={{ mt: 7, mb: 3 }}>
       Central de Conhecimento Básico
    </Typography>

      <Typography variant="h5" textAlign="center" sx={{ mb: 2 }}>
        Sobre o Projeto
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ lineHeight: 1.6 }}>
        Este é um projeto de aprendizado focado em conceitos fundamentais do
        React e tecnologias relacionadas, onde fiz algumas telas exemplificando
        o que aprendi, pontuando sobre hooks do React.
      </Typography>
      <Typography
        variant="body2"
        textAlign="center"
        sx={{ mt: 2, mb: 2, fontStyle: "italic" }}
      >
        Acesse os exemplos de cada conceito através dos botões!
      </Typography>

      {/* Box - Botões dos Hooks */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <Box>
          <Typography variant="h5" textAlign="center" sx={{ mb: 1}}>
            Hooks
          </Typography>
        </Box>

        <Button sx={{ width: "20%" }} variant="contained" onClick={() => navigate("/usestatepage")}>
          UseState
        </Button>
        <Button sx={{ width: "20%" }} variant="contained" onClick={() => navigate("/useeffectpage")}>
          UseEffect
        </Button>
        <Button sx={{ width: "20%" }} variant="contained" onClick={() => navigate("/userefpage")}>
          UseRef
        </Button>
        <Button sx={{ width: "20%" }} variant="contained" onClick={() => navigate("/usecontextpage1")}>
          UseContext1
        </Button>
        <Button sx={{ width: "20%" }} variant="contained" onClick={() => navigate("/usecontextpage2")}>
          UseContext2
        </Button>
        <Button sx={{ width: "20%" }} variant="contained" onClick={() => navigate("/usereducerpage")}>
          UseReducer
        </Button>
        <Button sx={{ width: "20%" }} variant="contained" onClick={() => navigate("/usecallbackpage")}>
          UseCallback
        </Button>
        <Button sx={{ width: "20%" }} variant="contained" onClick={() => navigate("/usememopage")}>
          UseMemo
        </Button>
        <Button sx={{ width: "20%" }} variant="contained" onClick={() => navigate("/useimperativehandlepage")}>
          UseImperativeHandle
        </Button>
      </Box>
    </Box>
  );
};

export default Menu;