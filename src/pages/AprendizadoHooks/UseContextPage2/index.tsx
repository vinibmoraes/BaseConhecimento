import { Box, Button, Typography } from "@mui/material";
import ButtonBackMenu from "../../../components/ButtonBackMenu";
import { useUser } from "../../../context/UserContext"; 

const UseContextPage2 = () => {
  const { userName, setUserName } = useUser();

  const handleChangeName = () => {
    setUserName(userName === "João" ? "Maria" : "João");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "#D2E1DF",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
        <ButtonBackMenu />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: 3,
          gap: 2,
        }}
      >
        <Typography variant="h5">UseContext - Exemplo 2</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
          <Typography variant="h6">Nome do usuário: {userName}</Typography>
          <Button variant="contained" onClick={handleChangeName}>
            Alterar nome
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "80%", mx: "auto" }}>
        <Typography sx={{ textAlign: "center", lineHeight: 1.6 }} variant="h5">
          Essa é a página 2 usando o mesmo contexto. Alterando o nome aqui, a
          mudança também será refletida na página 1, já que ambos compartilham o
          mesmo <code>UserContext</code>.
        </Typography>
      </Box>
    </Box>
  );
};

export default UseContextPage2;
