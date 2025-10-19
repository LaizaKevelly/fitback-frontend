import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { usePageTitle } from "../../../context/PageTitleContext.jsx";
import * as S from "./RegisterClient.styles.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";

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

const RegisterClient = () => {
  const [formClient, setFormClient] = useState(INITIAL_FORM_STATE);
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle("Cadastrar Cliente");
  }, [setTitle]);

  return (
    <div>
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
          />
          <TextField
            id="password-input"
            name="password-input"
            type="password"
            value={formClient.password}
            onChange={(e) =>
              setFormClient({ ...formClient, password: e.target.value })
            }
            label="Senha*"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="confirm-password-input"
            name="confirm-password-input"
            type="password"
            value={formClient.confirmPassword}
            onChange={(e) =>
              setFormClient({ ...formClient, confirmPassword: e.target.value })
            }
            label="Repita a Senha*"
            variant="outlined"
            margin="normal"
          />
        </S.FormGrid>
        <S.ActionRow>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            color="secondary"
          >
            Voltar
          </Button>
          <Button startIcon={<AddIcon />} variant="contained" color="primary">
            Cadastrar
          </Button>
        </S.ActionRow>
      </S.RegisterClientForm>
    </div>
  );
};

export default RegisterClient;
