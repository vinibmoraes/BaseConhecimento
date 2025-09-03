import { useReducer } from 'react';
import { Box, Button, Typography } from "@mui/material";
import ButtonBackMenu from "../../../components/ButtonBackMenu";

// Definindo o estado inicial
const initialState = { count: 0 };

// Definindo o reducer
function countReducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UseReducerPage = () => {
  // Usando o useReducer
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", bgcolor: "#D2E1DF" }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
        <ButtonBackMenu />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", py: 3, gap: 2 }}>
        <Typography variant="h5">UseReducer - Exemplo</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
          <Typography variant="h6">Contador: {state.count}</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={() => dispatch({ type: "increment" })}>
              Incrementar
            </Button>
            <Button variant="contained" onClick={() => dispatch({ type: "decrement" })}>
              Decrementar
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "80%", mx: "auto" }}>
        <Typography sx={{ textAlign: "center", lineHeight: 1.6 }} variant="h5">
          useReducer: O hook `useReducer` é usado para gerenciar estados complexos que dependem de várias ações ou atualizações. 
          Em vez de simplesmente atualizar o estado com `useState`, você define um **reducer** que recebe o estado atual e uma ação, 
          e retorna um novo estado. Esse é o padrão usado pelo Redux.
        </Typography>
      </Box>
    </Box>
  );
};

export default UseReducerPage;
