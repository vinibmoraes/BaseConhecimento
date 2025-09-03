// src/pages/AprendizadoHooks/UseEffectPage.jsx
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ButtonBackMenu from "../../../components/ButtonBackMenu";

const UseEffectPage = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`O contador foi atualizado para ${count}`);
  }, [count]);

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
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Aumentar contador
        </Button>
        <Typography variant="h5">{count}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {message}
        </Typography>
      </Box>

      <Box sx={{ width: "80%", mx: "auto" }}>
        <Typography sx={{ textAlign: "center", lineHeight: 1.6 }} variant="h5">
          useEffect: Esse hook é usado para lidar com efeitos colaterais em componentes funcionais. Ele é disparado após a renderização do componente. 
          Podemos usá-lo, por exemplo, para buscar dados de uma API, adicionar event listeners, ou atualizar valores quando uma variável de estado muda. 
          No exemplo acima, sempre que o contador muda, uma mensagem é atualizada automaticamente.
        </Typography>
      </Box>
    </Box>
  );
};

export default UseEffectPage;
