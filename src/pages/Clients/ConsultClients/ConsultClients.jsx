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
import EditClientModal from "../EditClient/EditClientModal.jsx";
import InactivateClientModal from "../InactivateClient/InactivateClientModal.jsx";

const rows = [
  {
    id: 1,
    firstName: "Ana",
    lastName: "Silva",
    email: "ana.silva@example.com",
    cpf: "123.456.789-00",
    registration: "2024001",
    createdAt: "2024-02-15",
    phone: "11987654321",
    status: "Ativo",
  },
  {
    id: 2,
    firstName: "Bruno",
    lastName: "Souza",
    email: "bruno.souza@example.com",
    cpf: "987.654.321-11",
    registration: "2024002",
    createdAt: "2023-11-03",
    phone: "11987654322",
    status: "Inativo",
  },
  {
    id: 3,
    firstName: "Carla",
    lastName: "Pereira",
    email: "carla.pereira@example.com",
    cpf: "111.222.333-44",
    registration: "2024003",
    createdAt: "2025-01-08",
    phone: "11987654323",
    status: "Ativo",
  },
];

const ConsultClients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState({});
  const [openInactivateModal, setOpenInactivateModal] = useState(false);
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
      field: "name",
      headerName: "Nome Completo",
      flex: 1.5,
      minWidth: 200,
      renderCell: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
      field: "createdAt",
      headerName: "Data do Cadastro",
      flex: 1,
      minWidth: 160,
      valueGetter: (params) => params.row.createdAt,
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
              onChange={() => {
                if (params.row.status === "Ativo") {
                  setOpenInactivateModal(true);
                  setSelectedClient(params.row);
                } else {
                  params.row.status = "Ativo";
                }
              }}
              color="primary"
            />
            <IconButton
              size="small"
              color="primary"
              onClick={() => {
                setOpenEditModal(true);
                setSelectedClient(params.row);
              }}
            >
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
          placeholder="Buscar cliente por name ou CPF..."
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
          onClick={() => navigate("/cadastrar-cliente")}
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
      <InactivateClientModal
        open={openInactivateModal}
        onClose={() => setOpenInactivateModal(false)}
        clientName={`${selectedClient.firstName} ${selectedClient.lastName}`}
      />
      <EditClientModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        client={selectedClient}
      />
    </S.ConsultClientsContainer>
  );
};

export default ConsultClients;
