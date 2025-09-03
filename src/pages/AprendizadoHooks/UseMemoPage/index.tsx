import { useState, useMemo } from 'react';
import { Box, Button, Typography } from "@mui/material";
import ButtonBackMenu from "../../../components/ButtonBackMenu";

// Função que calcula o fatorial de um número
const factorial = (n: number): number => {
  console.log('Calculando fatorial...');
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const UseMemoPage = () => {
  const [number, setNumber] = useState(1);

  // Usando useMemo para memorizar o valor do fatorial
  const memoizedFactorial = useMemo(() => factorial(number), [number]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", bgcolor: "#D2E1DF" }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
        <ButtonBackMenu />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", py: 3, gap: 2 }}>
        <Typography variant="h5">UseMemo - Exemplo</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
          <Typography variant="h6">Número: {number}</Typography>
          <Typography variant="h6">Fatorial: {memoizedFactorial}</Typography>
          <Button variant="contained" onClick={() => setNumber(number + 1)}>
            Incrementar número
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "80%", mx: "auto" }}>
        <Typography sx={{ textAlign: "center", lineHeight: 1.6 }} variant="h5">
          useMemo: O hook `useMemo` é usado para memorizar o resultado de cálculos ou expressões pesadas. 
          No exemplo acima, estamos calculando o fatorial de um número. Se o número não mudar, o cálculo do fatorial será "memorizado" 
          e não será refeito em renderizações subsequentes. Isso melhora a performance.
        </Typography>
      </Box>
    </Box>
  );
};

export default UseMemoPage;
