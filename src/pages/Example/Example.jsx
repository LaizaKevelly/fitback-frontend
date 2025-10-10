import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Card,
  CardContent,
  TextField,
  Checkbox,
  FormControlLabel,
  Switch,
  Grid,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Divider,
  Radio,
  RadioGroup,
  Chip,
  useTheme,
} from "@mui/material";

const ComponentExamplePage = () => {
  const [checked, setChecked] = useState(true);
  const [switchOn, setSwitchOn] = useState(true);
  const [radioValue, setRadioValue] = useState("a");
  const [selectValue, setSelectValue] = useState("");
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.secondary.main }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: theme.palette.secondary.contrastText }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,
              color: theme.palette.secondary.contrastText,
              fontWeight: 700,
            }}
          >
            Catálogo de Componentes (Estilo Acad.)
          </Typography>
          <Button variant="outlined" color="primary">
            Sair
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 5, mb: 5 }}>
        <Typography variant="h1" gutterBottom>
          Tipografia e Estrutura (H1)
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.text.secondary }}
          gutterBottom
        >
          Este subtítulo usa o peso 500 (medium) da fonte Inter, conforme o guia
          de estilo.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              1. Botões
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Ação Primária
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" disabled>
                    Primário Desativado
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Ação Secundária
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary" disabled>
                    Secundário Desativado
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="text" color="primary">
                    Link/Texto
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="text" color="primary" disabled>
                    Texto Desativado
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              2. Campos de Formulário
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Padrão (Outlined)"
                    variant="outlined"
                    fullWidth
                    defaultValue="Campo preenchido"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Com Erro"
                    variant="outlined"
                    fullWidth
                    error
                    defaultValue="Obrigatório"
                    helperText="Este campo possui um erro."
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Desativado"
                    variant="outlined"
                    fullWidth
                    disabled
                    defaultValue="Campo inativo"
                  />
                </Grid>
                <Grid item xs={12} sm={6} width={"100%"}>
                  <FormControl fullWidth>
                    <InputLabel id="select-label">Select Padrão</InputLabel>
                    <Select
                      fullWidth
                      labelId="select-label"
                      value={selectValue}
                      label="Select Padrão"
                      onChange={(e) => setSelectValue(e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="">
                        <em>Nenhum</em>
                      </MenuItem>
                      <MenuItem value="opcao1">Opção 1</MenuItem>
                      <MenuItem value="opcao2">Opção 2</MenuItem>
                      <MenuItem value="opcao3">Opção 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              3. Controles de Seleção
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1" gutterBottom>
                    Checkbox
                  </Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                      />
                    }
                    label="Aceito os termos (Ativo)"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Não Selecionado"
                  />
                  <FormControlLabel
                    disabled
                    control={<Checkbox checked />}
                    label="Desativado"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1" gutterBottom>
                    Switch
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switchOn}
                        onChange={(e) => setSwitchOn(e.target.checked)}
                      />
                    }
                    label="Ativar notificações (On)"
                  />
                  <FormControlLabel
                    control={<Switch />}
                    label="Desativar (Off)"
                  />
                  <FormControlLabel
                    disabled
                    control={<Switch checked />}
                    label="Desativado (On)"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1" gutterBottom>
                    Radio Group
                  </Typography>
                  <RadioGroup
                    aria-label="opcoes"
                    name="radio-group"
                    value={radioValue}
                    onChange={(e) => setRadioValue(e.target.value)}
                  >
                    <FormControlLabel
                      value="a"
                      control={<Radio />}
                      label="Opção A (Selecionada)"
                    />
                    <FormControlLabel
                      value="b"
                      control={<Radio />}
                      label="Opção B"
                    />
                    <FormControlLabel
                      value="c"
                      disabled
                      control={<Radio />}
                      label="Opção C (Desativada)"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              4. Indicadores e Dados
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Chip
                    label="Status: Ativo"
                    color="success"
                    icon={<CheckCircleIcon />}
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label="Status: Erro Crítico"
                    color="error"
                    icon={<ErrorIcon />}
                  />
                </Grid>
                <Grid item>
                  <Card
                    sx={{
                      minWidth: 275,
                      bgcolor:
                        theme.palette.custom?.grayTable ||
                        theme.palette.divider,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h3" component="div">
                        R$ 1.250,00
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Faturamento Mensal
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ComponentExamplePage;
