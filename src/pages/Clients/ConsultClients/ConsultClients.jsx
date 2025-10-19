import { useEffect, useState } from "react";
import { usePageTitle } from "../../../context/PageTitleContext.jsx";
import * as S from "./ConsultClients.styles.js";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  IconButton,
  InputAdornment,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router";

const rows = [
  {
    id: 1,
    nome: "Ana Silva",
    email: "ana.silva@example.com",
    cpf: "123.456.789-00",
    dataCadastro: "2024-02-15",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Bruno Souza",
    email: "bruno.souza@example.com",
    cpf: "987.654.321-11",
    dataCadastro: "2023-11-03",
    status: "Inativo",
  },
  {
    id: 3,
    nome: "Carla Pereira",
    email: "carla.pereira@example.com",
    cpf: "111.222.333-44",
    dataCadastro: "2025-01-08",
    status: "Ativo",
  },
];

const ConsultClients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setTitle } = usePageTitle();
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Consultar Clientes");
  }, [setTitle]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const columns = [
    {
      field: "nome",
      headerName: "Nome Completo",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: "cpf",
      headerName: "CPF",
      flex: 1,
      minWidth: 140,
    },
    {
      field: "dataCadastro",
      headerName: "Data do Cadastro",
      flex: 1,
      minWidth: 160,
      valueGetter: (params) => params.row.dataCadastro,
      renderCell: (params) =>
        new Date(params.value).toLocaleDateString(undefined, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.8,
      minWidth: 120,
      renderCell: (params) => {
        const s = params.value;
        const style = {
          display: "inline-block",
          padding: "4px 8px",
          borderRadius: 12,
          background:
            s === "Ativo"
              ? "rgba(76, 175, 80, 0.12)"
              : "rgba(244, 67, 54, 0.08)",
          color: s === "Ativo" ? "#2e7d32" : "#c62828",
          fontWeight: 500,
          fontSize: 13,
        };
        return <span style={style}>{s}</span>;
      },
    },
    {
      field: "actions",
      headerName: "Ações",
      sortable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",
      flex: 0.9,
      minWidth: 160,
      renderCell: (params) => {
        return (
          <S.ActionsContainer>
            <Switch
              checked={params.row.status === "Ativo"}
              // onChange={(e) => handleStatusChange(e, params.row.id)}
              color="primary"
            />
            <IconButton size="small" color="primary">
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" color="error">
              <VisibilityOutlinedIcon fontSize="small" />
            </IconButton>
          </S.ActionsContainer>
        );
      },
    },
  ];

  return (
    <S.ConsultClientsContainer>
      <S.SearchContainer>
        <S.SearchInput
          variant="filled"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar cliente por nome ou CPF..."
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          id="search-button"
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
        >
          Pesquisar
        </Button>
        <Button
          id="new-client-button"
          variant="outlined"
          color="primary"
          startIcon={<AddIcon />}
          onClick={()=> navigate('/cadastrar-cliente')}
        >
          Novo Cliente
        </Button>
      </S.SearchContainer>

      <S.ClientsList>
        <Table>
          <S.ClientTableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </S.ClientTableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.field}>
                    {column.renderCell
                      ? column.renderCell({ value: row[column.field], row })
                      : row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.ClientsList>
    </S.ConsultClientsContainer>
  );
};

export default ConsultClients;
