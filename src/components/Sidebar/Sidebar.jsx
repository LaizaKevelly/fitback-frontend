import { List, ListItemText, Box } from "@mui/material";
import * as S from "./Sidebar.styles.js";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Link } from "react-router";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [expanded, setExpanded] = useState("panel0");

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
        {console.log(window.location.pathname)}
        <S.AccordionItem>
          <S.AccordionLink
            selected={window.location.pathname === "/clientes"}
            to="/clientes"
          >
            Consultar Clientes
          </S.AccordionLink>
          {/* <S.SidebarItem>
            <ListItemText primary="Listar Clientes" />
          </S.SidebarItem>
          <S.SidebarItem>
            <ListItemText primary="Adicionar Cliente" />
          </S.SidebarItem> */}
        </S.AccordionItem>
      </S.SidebarAccordion>
      {/* <S.SidebarItem>
          <ListItemText primary="Home" />
        </S.SidebarItem>
        <S.SidebarItem>
          <ListItemText primary="About" />
        </S.SidebarItem>
        <S.SidebarItem>
          <ListItemText primary="Settings" />
        </S.SidebarItem> */}
    </S.SidebarWrapper>
  );
};

export default Sidebar;
