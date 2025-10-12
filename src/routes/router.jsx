import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import Home from "../pages/home/Home.jsx";
import Example from "../pages/Example/Example.jsx";
// import Login from '../pages/Auth/Login.jsx';
// import Register from '../pages/Auth/Register.jsx';
// import Feedback from '../pages/Feedback/Feedback.jsx';
// import Reports from '../pages/Reports/Reports.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas de Autenticação */}
        {/* <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Route> */}

        {/* Rotas da Aplicação */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/consultar-clientes" element={<Example />} />
          <Route path="/cadastrar-cliente" element={<Example />} />
          <Route path="/consultar-categorias" element={<Example />} />
          <Route path="/cadastrar-categoria" element={<Example />} />
          {/* Essas rotas precisam que seus componentes sejam importados */}
          {/* <Route path="/feedback/novo" element={<Feedback />} /> */}
          {/* <Route path="/relatorios" element={<Reports />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
