import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  Divider,
  Chip,
  useTheme,
  Alert,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Tooltip
} from "@mui/material";
import {
  Add,
  Edit,
  Delete,
  Category,
  ArrowBack
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const RegisterCategory = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Estados do formulário
  const [categoria, setCategoria] = useState({
    nome: '',
    descricao: '',
    tipo: '',
    status: 'ativo',
    cor: theme.palette.primary.main
  });

  // Estados para controle
  const [categorias, setCategorias] = useState([]);
  const [editando, setEditando] = useState(false);
  const [categoriaEditando, setCategoriaEditando] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const coresDisponiveis = [
    { nome: 'Primária', valor: theme.palette.primary.main },
    { nome: 'Secundária', valor: theme.palette.secondary.main },
    { nome: 'Sucesso', valor: theme.palette.success.main },
    { nome: 'Aviso', valor: theme.palette.warning.main },
    { nome: 'Info', valor: theme.palette.info.main },
    { nome: 'Erro', valor: theme.palette.error.main }
  ];

  // Tipos de categoria
  const tiposCategoria = [
    'Setor',
    'Filial',
    'Equipe',
    'Produto',
    'Serviço',
    'Infraestrutura',
    'Outro'
  ];

  const handleChange = (campo) => (event) => {
    setCategoria({
      ...categoria,
      [campo]: event.target.value
    });
  };

  // Função para validar formulário
  const validarFormulario = () => {
    if (!categoria.nome.trim()) {
      mostrarSnackbar('Nome da categoria é obrigatório', 'error');
      return false;
    }
    if (!categoria.tipo) {
      mostrarSnackbar('Tipo da categoria é obrigatório', 'error');
      return false;
    }
    return true;
  };

  // Função para salvar categoria
  const handleSalvar = () => {
    if (!validarFormulario()) return;

    if (editando) {
      // Editar categoria existente
      const categoriasAtualizadas = categorias.map(cat =>
        cat.id === categoriaEditando.id ? { ...categoria, id: categoriaEditando.id } : cat
      );
      setCategorias(categoriasAtualizadas);
      mostrarSnackbar('Categoria atualizada com sucesso!', 'success');
    } else {
      // Adicionar nova categoria
      const novaCategoria = {
        ...categoria,
        id: Date.now(), // ID temporário - no backend seria gerado automaticamente
        dataCriacao: new Date().toISOString()
      };
      setCategorias([...categorias, novaCategoria]);
      mostrarSnackbar('Categoria cadastrada com sucesso!', 'success');
    }

    limparFormulario();
  };

  // Função para editar categoria
  const handleEditar = (categoria) => {
    setCategoria(categoria);
    setEditando(true);
    setCategoriaEditando(categoria);
  };

  // Função para excluir categoria
  const handleExcluir = (id) => {
    setCategorias(categorias.filter(cat => cat.id !== id));
    mostrarSnackbar('Categoria excluída com sucesso!', 'success');
  };

  // Função para cancelar edição
  const handleCancelar = () => {
    limparFormulario();
    setEditando(false);
    setCategoriaEditando(null);
  };

  // Limpar formulário
  const limparFormulario = () => {
    setCategoria({
      nome: '',
      descricao: '',
      tipo: '',
      status: 'ativo',
      cor: theme.palette.primary.main
    });
  };

  // snackbar
  const mostrarSnackbar = (message, severity) => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ mt: 5, mb: 5 }}>
        {/* Cabeçalho */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Tooltip title="Voltar">
            <IconButton 
              onClick={() => navigate(-1)}
              sx={{ mr: 2 }}
            >
              <ArrowBack />
            </IconButton>
          </Tooltip>
          <Box>
            <Typography variant="h1" gutterBottom>
              Cadastrar Categoria
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.text.secondary }}
            >
              Gerencie as categorias de perguntas do sistema
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={4}>
          {/* Formulário de Cadastro */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <Category sx={{ mr: 1 }} />
                {editando ? 'Editar Categoria' : 'Nova Categoria'}
              </Typography>

              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nome da Categoria"
                      value={categoria.nome}
                      onChange={handleChange('nome')}
                      placeholder="Ex: Setor, Filial, Equipe..."
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Descrição"
                      value={categoria.descricao}
                      onChange={handleChange('descricao')}
                      placeholder="Descreva o propósito desta categoria..."
                    />
                  </Grid>

                  {/* Tipo de Categoria*/}
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Tipo *</InputLabel>
                      <Select
                        value={categoria.tipo}
                        label="Tipo *"
                        onChange={handleChange('tipo')}
                        required
                      >
                        {tiposCategoria.map((tipo) => (
                          <MenuItem key={tipo} value={tipo}>
                            {tipo}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Cor da Categoria */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Cor</InputLabel>
                      <Select
                        value={categoria.cor}
                        label="Cor"
                        onChange={handleChange('cor')}
                      >
                        {coresDisponiveis.map((cor) => (
                          <MenuItem key={cor.nome} value={cor.valor}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box
                                sx={{
                                  width: 20,
                                  height: 20,
                                  backgroundColor: cor.valor,
                                  borderRadius: '50%',
                                  mr: 1
                                }}
                              />
                              {cor.nome}
                            </Box>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Status */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={categoria.status}
                        label="Status"
                        onChange={handleChange('status')}
                      >
                        <MenuItem value="ativo">Ativo</MenuItem>
                        <MenuItem value="inativo">Inativo</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{ 
                      display: 'flex', 
                      gap: 2,
                      flexWrap: 'wrap',
                      alignItems: 'center'
                    }}>
                      <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={handleSalvar}
                        sx={{
                          backgroundColor: editando ? theme.palette.warning.main : theme.palette.primary.main,
                          minWidth: 140,
                          px: 3,
                          py: 1.2,
                          fontSize: '1rem',
                          fontWeight: 600,
                          flex: 1,
                          '&:hover': {
                            transform: 'translateY(-1px)',
                            boxShadow: 2
                          }
                        }}
                      >
                        {editando ? 'Atualizar' : 'Cadastrar'}
                      </Button>

                      <Button
                        variant="outlined"
                        onClick={limparFormulario}
                        sx={{
                          minWidth: 120,
                          px: 3,
                          py: 1.2,
                          flex: 1,
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            transform: 'translateY(-1px)'
                          }
                        }}
                      >
                        Limpar
                      </Button>
                    </Box>
                  </Grid>

                  {/* Botão Cancelar (apenas em edição) */}
                  {editando && (
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                          variant="text"
                          onClick={handleCancelar}
                          sx={{
                            color: theme.palette.text.secondary,
                            '&:hover': {
                              backgroundColor: theme.palette.action.hover,
                              color: theme.palette.text.primary
                            }
                          }}
                        >
                          Cancelar Edição
                        </Button>
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Lista de Categorias Cadastradas */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Categorias Cadastradas ({categorias.length})
              </Typography>

              {categorias.length === 0 ? (
                <Box
                  sx={{
                    textAlign: 'center',
                    py: 4,
                    color: theme.palette.text.secondary
                  }}
                >
                  <Category sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
                  <Typography variant="body1">
                    Nenhuma categoria cadastrada
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ mt: 2 }}>
                  {categorias.map((cat) => (
                    <Card
                      key={cat.id}
                      sx={{
                        mb: 2,
                        borderLeft: `4px solid ${cat.cor}`,
                        backgroundColor: theme.palette.background.paper,
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 2
                        }
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <Box sx={{ flex: 1, mr: 2 }}>
                            <Typography variant="h6" gutterBottom>
                              {cat.nome}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              color="text.secondary"
                              sx={{ mb: 1 }}
                            >
                              {cat.descricao}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                              <Chip
                                label={cat.tipo}
                                size="small"
                                variant="outlined"
                              />
                              <Chip
                                label={cat.status}
                                size="small"
                                color={cat.status === 'ativo' ? 'success' : 'default'}
                              />
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Tooltip title="Editar">
                              <IconButton
                                size="small"
                                onClick={() => handleEditar(cat)}
                                sx={{ 
                                  color: theme.palette.warning.main,
                                  '&:hover': {
                                    backgroundColor: theme.palette.warning.light,
                                    color: 'white'
                                  }
                                }}
                              >
                                <Edit />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Excluir">
                              <IconButton
                                size="small"
                                onClick={() => handleExcluir(cat.id)}
                                sx={{ 
                                  color: theme.palette.error.main,
                                  '&:hover': {
                                    backgroundColor: theme.palette.error.light,
                                    color: 'white'
                                  }
                                }}
                              >
                                <Delete />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>

        {/* Snackbar para feedback */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default RegisterCategory;