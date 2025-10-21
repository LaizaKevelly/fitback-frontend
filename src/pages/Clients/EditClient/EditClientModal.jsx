import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import * as S from "../RegisterClient/RegisterClient.styles.js";
import { DialogWrapper } from "./EditClientModal.styles.js";
import CheckTwoTone from "@mui/icons-material/CheckTwoTone";
import CancelTwoTone from "@mui/icons-material/CancelTwoTone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  cpf: "",
  registration: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const EditClientModal = ({
  openEditModal,
  setOpenEditModal,
  client,
  detailsMode,
  setDetailsMode,
}) => {
  const [formClient, setFormClient] = useState(INITIAL_FORM_STATE);

  useEffect(() => {
    setFormClient({
      firstName: client.firstName || "",
      lastName: client.lastName || "",
      cpf: client.cpf || "",
      registration: client.registration || "",
      email: client.email || "",
      phone: client.phone || "",
    });
  }, [client]);

  return (
    <DialogWrapper open={openEditModal} onClose={() => setOpenEditModal(false)}>
      <h3>{detailsMode ? "Detalhes do Cliente" : "Editar Cliente"}</h3>
      <S.RegisterClientForm>
        <S.FormGrid>
          <TextField
            id="first-name-input"
            name="first-name-input"
            value={formClient.firstName}
            className="first-name-input"
            onChange={(e) =>
              setFormClient({ ...formClient, firstName: e.target.value })
            }
            label="Nome*"
            variant="outlined"
            margin="normal"
            readOnly={detailsMode}
            disabled={detailsMode}
          />
          <TextField
            id="last-name-input"
            name="last-name-input"
            value={formClient.lastName}
            className="last-name-input"
            onChange={(e) =>
              setFormClient({ ...formClient, lastName: e.target.value })
            }
            label="Sobrenome*"
            variant="outlined"
            margin="normal"
            readOnly={detailsMode}
            disabled={detailsMode}
          />
          <TextField
            id="cpf-input"
            name="cpf-input"
            value={formClient.cpf}
            onChange={(e) =>
              setFormClient({ ...formClient, cpf: e.target.value })
            }
            label="CPF*"
            variant="outlined"
            margin="normal"
            readOnly={detailsMode}
            disabled={detailsMode}
          />
          <TextField
            id="registration-input"
            name="registration-input"
            value={formClient.registration}
            onChange={(e) =>
              setFormClient({ ...formClient, registration: e.target.value })
            }
            label="Matrícula*"
            variant="outlined"
            margin="normal"
            readOnly={detailsMode}
            disabled={detailsMode}
          />
          <TextField
            id="email-input"
            name="email-input"
            value={formClient.email}
            onChange={(e) =>
              setFormClient({ ...formClient, email: e.target.value })
            }
            label="Email*"
            variant="outlined"
            margin="normal"
            readOnly={detailsMode}
            disabled={detailsMode}
          />
          <TextField
            id="phone-input"
            name="phone-input"
            value={formClient.phone}
            onChange={(e) =>
              setFormClient({ ...formClient, phone: e.target.value })
            }
            label="Telefone*"
            variant="outlined"
            margin="normal"
            readOnly={detailsMode}
            disabled={detailsMode}
          />
        </S.FormGrid>
        <S.ActionRow>
          <Button
            startIcon={<CancelTwoTone />}
            variant="outlined"
            color="secondary"
            onClick={() => {
              setOpenEditModal(false);
              setDetailsMode(false);
            }}
          >
            {detailsMode ? "Fechar" : "Cancelar"}
          </Button>
          <Button
            startIcon={detailsMode ? <EditOutlinedIcon /> : <CheckTwoTone />}
            variant="contained"
            color="primary"
            onClick={() => setDetailsMode(false)}
          >
            {detailsMode ? "Editar" : "Salvar Alterações"}
          </Button>
        </S.ActionRow>
      </S.RegisterClientForm>
    </DialogWrapper>
  );
};

export default EditClientModal;
