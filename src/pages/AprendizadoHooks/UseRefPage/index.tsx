import { Box, Button, Typography } from "@mui/material";
import { useRef} from "react";
import ButtonBackMenu from "../../../components/ButtonBackMenu";

const UseRefPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);


  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
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
        <Typography variant="h5">UseRef - Exemplo</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
          <input
            ref={inputRef} // Associando a referência ao input
            type="text"
            placeholder="Clique no botão para focar"
            style={{ padding: "10px", fontSize: "16px", width: "300px" }}
          />
          <Button variant="contained" onClick={handleFocus}>
            Focar no input
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "80%", mx: "auto" }}>
        <Typography sx={{ textAlign: "center", lineHeight: 1.6 }} variant="h5">
          useRef: Esse hook permite que você crie uma referência mutável que persiste durante o ciclo de vida do componente. 
          Ao contrário do `useState`, o `useRef` não causa re-renderização quando seu valor muda. Ele é útil quando você precisa acessar elementos DOM diretamente, 
          ou para armazenar valores persistentes que não afetam a renderização. No exemplo acima, ao clicar no botão, o input recebe o foco diretamente.
        </Typography>
      </Box>
    </Box>
  );
};

export default UseRefPage;
