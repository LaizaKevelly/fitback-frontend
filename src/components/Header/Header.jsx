import Typography from "@mui/material/Typography";
import * as S from "./Header.styles.js";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo_fitback_horizontal.png";

const Header = ({ pageTitle, isSidebarOpen, toggleSidebar }) => (
  <S.HeaderContainer>
    <S.HeaderLogoWrapper>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleSidebar(!isSidebarOpen)}
      >
        <MenuIcon />
      </IconButton>
      <S.Logo src={logo} alt="Fitback Logo" />
      <S.HeaderDivider />
    </S.HeaderLogoWrapper>
    <S.HeaderPageTitle>Consultar Clientes</S.HeaderPageTitle>
  </S.HeaderContainer>
);

export default Header;
