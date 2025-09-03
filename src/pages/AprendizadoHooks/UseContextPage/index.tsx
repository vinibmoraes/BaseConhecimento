import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { Box, Button, Typography } from "@mui/material";
import ButtonBackMenu from "../../../components/ButtonBackMenu";

// Definindo o tipo do contexto
interface UserContextType {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

// Criando o contexto com o tipo correto
const UserContext = createContext<UserContextType | null>(null);

// Definindo o tipo para os props do UserProvider
interface UserProviderProps {
  children: ReactNode;
}

// Criando o provider para o contexto
export const UserProvider = ({ children }: UserProviderProps) => {
  const [userName, setUserName] = useState("João");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acessar o contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Componente da página UseContext
const UseContextPage = () => {
  const { userName, setUserName } = useUser(); // Desestruturando os valores do contexto

  const handleChangeName = () => {
    // Alterando o nome do usuário
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

export default UseContextPage;
