import { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { Box, Button, Typography } from "@mui/material";
import ButtonBackMenu from "../../../components/ButtonBackMenu";

// Tipando a ref para expor os métodos increment e reset
interface CounterHandles {
  increment: () => void;
  reset: () => void;
}

// Componente Counter com forwardRef e useImperativeHandle
const Counter = forwardRef<CounterHandles, {}>((props, ref) => {
  const [count, setCount] = useState(0);

  // Expondo os métodos increment e reset para o componente pai
  useImperativeHandle(ref, () => ({
    increment: () => {
      setCount(count + 1);
    },
    reset: () => {
      setCount(0);
    },
  }));

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Typography variant="h5">Contador: {count}</Typography>
    </Box>
  );
});

const UseImperativeHandlePage = () => {
  // Tipando a ref para ter os métodos increment e reset
  const counterRef = useRef<{ increment: () => void; reset: () => void } | null>(null);

  const handleIncrement = () => {
    if (counterRef.current) {
      counterRef.current.increment();  // Chamando a função exposta para incrementar o contador
    }
  };

  const handleReset = () => {
    if (counterRef.current) {
      counterRef.current.reset();  // Chamando a função exposta para resetar o contador
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", bgcolor: "#D2E1DF" }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
        <ButtonBackMenu />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", py: 3, gap: 2 }}>
        <Typography variant="h5">UseImperativeHandle - Exemplo</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
          <Button variant="contained" onClick={handleIncrement}>Incrementar Contador</Button>
          <Button variant="contained" onClick={handleReset}>Resetar Contador</Button>
        </Box>
      </Box>

      {/* O Counter é renderizado aqui, passando a ref */}
      <Counter ref={counterRef} />

      <Box sx={{ width: "80%", mx: "auto" }}>
        <Typography sx={{ textAlign: "center", lineHeight: 1.6 }} variant="h5">
          useImperativeHandle: O hook `useImperativeHandle` é usado em conjunto com `forwardRef` para permitir que um componente 
          exponha métodos ou propriedades para um componente pai através de **ref**. No exemplo acima, o componente pai 
          pode chamar os métodos **`increment`** e **`reset`** diretamente no componente **`Counter`** sem expor o estado ou lógica 
          interna do contador.
        </Typography>
      </Box>
    </Box>
  );
};

export default UseImperativeHandlePage;
