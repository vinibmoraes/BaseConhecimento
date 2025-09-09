import { Routes, Route } from "react-router-dom";
import Menu from "../pages/Menu";
import UseStatePage from "../pages/AprendizadoHooks/UseStatePage";
import UseEffectPage from "../pages/AprendizadoHooks/UseEffectPage";
import UseRefPage from "../pages/AprendizadoHooks/UseRefPage";
import UseContextPage1 from "../pages/AprendizadoHooks/UseContextPage1";
import { UserProvider } from "../context/UserContext";
import UseReducerPage from "../pages/AprendizadoHooks/UseReducerPage";
import UseCallbackPage from "../pages/AprendizadoHooks/UseCallbackPage";
import UseMemoPage from "../pages/AprendizadoHooks/UseMemoPage";  
import UseImperativeHandlePage from "../pages/AprendizadoHooks/UseImperativeHandlePage";  
import UseContextPage2 from "../pages/AprendizadoHooks/UseContextPage2";

const Navigation = () => {
  return (
    <UserProvider>
      <Routes>        
          <Route path="/" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/usestatepage" element={<UseStatePage />} />
          <Route path="/useeffectpage" element={<UseEffectPage />} />
          <Route path="/userefpage" element={<UseRefPage />} />
          <Route path="/usecontextpage1" element={<UseContextPage1 />} />
          <Route path="/usecontextpage2" element={<UseContextPage2 />} />   
          <Route path="/usereducerpage" element={<UseReducerPage />} /> 
          <Route path="/usecallbackpage" element={<UseCallbackPage />} />   
          <Route path="/usememopage" element={<UseMemoPage />} /> 
          <Route path="/useimperativehandlepage" element={<UseImperativeHandlePage />} /> 
      </Routes>
    </UserProvider>
  );
};

export default Navigation;
