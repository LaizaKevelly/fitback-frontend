import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import Home from "../pages/home/Home.jsx";
import Example from "../pages/Example/Example.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route path="/app" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/consultar-clientes" element={<Example />} />
          <Route path="/cadastrar-cliente" element={<Example />} />
          <Route path="/consultar-categorias" element={<Example />} />
          <Route path="/cadastrar-categoria" element={<Example />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;