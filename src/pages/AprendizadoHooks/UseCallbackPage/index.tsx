import React, { useState, useCallback } from 'react';
import { Box, Button, Typography } from "@mui/material";
import ButtonBackMenu from "../../../components/ButtonBackMenu";

// Componente para contagem
const Counter = React.memo(({ increment }: { increment: () => void }) => {
  console.log('Componente Counter renderizado');
  return (
    <Button variant="contained" onClick={increment}>
      Incrementar contador
    </Button>
  );
});

const UseCallbackPage = () => {
  const [count, setCount] = useState(0);

  // Usando useCallback para memorizar a função de incremento
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // A função `increment` só será recriada se alguma dependência mudar (aqui, não temos dependências)

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", bgcolor: "#D2E1DF" }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
        <ButtonBackMenu />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", py: 3, gap: 2 }}>
        <Typography variant="h5">UseCallback - Exemplo</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
          <Typography variant="h6">Contador: {count}</Typography>
          <Counter increment={increment} /> {/* Passando a função increment memorada */}
        </Box>
      </Box>

      <Box sx={{ width: "80%", mx: "auto" }}>
        <Typography sx={{ textAlign: "center", lineHeight: 1.6 }} variant="h5">
          useCallback: O hook `useCallback` é usado para memorizar funções, evitando que elas sejam recriadas a cada renderização. 
          Isso é útil quando passamos funções como props para componentes filhos, evitando renderizações desnecessárias. 
          No exemplo acima, a função de incremento do contador não é recriada a cada render, o que pode melhorar a performance.
        </Typography>
      </Box>
    </Box>
  );
};

export default UseCallbackPage;
