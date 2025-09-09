import { Box, Button, Typography } from "@mui/material";
import ButtonBackMenu from "../../../components/ButtonBackMenu";
import { useUser } from "../../../context/UserContext";

const UseContextPage1 = () => {
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
        <Typography variant="h5">UseContext - Exemplo</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
          <Typography variant="h6">Nome do usuário: {userName}</Typography>
          <Button variant="contained" onClick={handleChangeName}>
            Alterar nome
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "80%", mx: "auto" }}>
        <Typography sx={{ textAlign: "center", lineHeight: 1.6 }} variant="h5">
          useContext: O hook `useContext` permite acessar um contexto em qualquer parte da árvore de componentes.
          Ele é usado para compartilhar dados entre componentes sem ter que passar esses dados via props manualmente.
          No exemplo acima, estamos compartilhando o nome do usuário entre componentes, e podemos alterá-lo utilizando o `setUserName` do contexto.
        </Typography>
      </Box>
    </Box>
  );
};

export default UseContextPage1;
