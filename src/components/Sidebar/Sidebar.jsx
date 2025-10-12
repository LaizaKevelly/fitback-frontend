import * as S from "./Sidebar.styles.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [expanded, setExpanded] = useState("panel0");
  const [activeLink, setActiveLink] = useState("");

  const handleAccordionChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <S.SidebarWrapper
      open={isSidebarOpen}
      onClose={toggleSidebar(false)}
      variant="persistent"
    >
      <S.SidebarAccordion
        expanded={expanded === "panel1"}
        onChange={handleAccordionChange("panel1")}
      >
        <S.AccordionLabel
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          expanded={expanded === "panel1"}
        >
          <p>Clientes</p>
        </S.AccordionLabel>
        <S.AccordionItem>
          <S.AccordionLink
            selected={activeLink === "/consultar-clientes"}
            to="/consultar-clientes"
            onClick={() => setActiveLink("/consultar-clientes")}
          >
            Consultar
          </S.AccordionLink>
        </S.AccordionItem>
        <S.AccordionItem>
          <S.AccordionLink
            selected={activeLink === "/cadastrar-cliente"}
            to="/cadastrar-cliente"
            onClick={() => setActiveLink("/cadastrar-cliente")}
          >
            Cadastrar
          </S.AccordionLink>
        </S.AccordionItem>
      </S.SidebarAccordion>
      <S.SidebarAccordion
        expanded={expanded === "panel2"}
        onChange={handleAccordionChange("panel2")}
      >
        <S.AccordionLabel
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          expanded={expanded === "panel2"}
        >
          <p>Categorias de Feedback</p>
        </S.AccordionLabel>
        <S.AccordionItem>
          <S.AccordionLink
            selected={activeLink === "/consultar-categorias"}
            to="/consultar-categorias"
            onClick={() => setActiveLink("/consultar-categorias")}
          >
            Consultar
          </S.AccordionLink>
        </S.AccordionItem>
        <S.AccordionItem>
          <S.AccordionLink
            selected={activeLink === "/cadastrar-categoria"}
            to="/cadastrar-categoria"
            onClick={() => setActiveLink("/cadastrar-categoria")}
          >
            Cadastrar
          </S.AccordionLink>
        </S.AccordionItem>
      </S.SidebarAccordion>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
