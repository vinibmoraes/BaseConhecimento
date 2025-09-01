import { Routes, Route } from "react-router-dom";
import Menu from "../pages/Menu";
import UseStatePage from "../pages/AprendizadoHooks/UseStatePage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/usestatepage" element={<UseStatePage />} />
    </Routes>
  );
};

export default Navigation;
