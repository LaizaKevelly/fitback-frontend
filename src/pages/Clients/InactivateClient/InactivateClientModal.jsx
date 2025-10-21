import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import WarningAmberTwoTone from "@mui/icons-material/WarningAmberTwoTone";
import * as S from "./InactivateClient.styles.js";

const InactivateClientModal = ({ open, onClose, clientName }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <S.DialogContent>
        <h2>Inativar Cliente</h2>
        <S.DialogMessage>
          <WarningAmberTwoTone />
          <p>Tem certeza que deseja inativar o cliente {clientName}?</p>
        </S.DialogMessage>
      </S.DialogContent>
      <S.DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={onClose}>
          Sim, Inativar
        </Button>
      </S.DialogActions>
    </Dialog>
  );
};

export default InactivateClientModal;
