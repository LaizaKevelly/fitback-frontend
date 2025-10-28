import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Chip,
  Grid,
  Card,
  CardContent,
  IconButton,
  Divider,
  Snackbar,
  Alert,
  FormControlLabel,
  Switch,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  FitnessCenter as FitnessCenterIcon,
  CleanHands as CleanHandsIcon,
  Groups as GroupsIcon,
  FormatListBulleted as ListIcon,
  Subject as SubjectIcon
} from '@mui/icons-material';

const QuestionManagement = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    text: '',
    type: 'estrutura',
    isDescriptive: false
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Paleta Focada: Laranja (Marrom) e Cinza
  const PRIMARY_COLOR = '#B25E09'; // Laranja/Marrom principal
  const DARK_PRIMARY = '#914d07'; // Laranja/Marrom escuro para hover
  const LIGHT_BG = '#f5f5f5'; // Cinza claro para fundo/detalhes (usado em Paper/instruções)
  const SECONDARY_COLOR = '#424242'; // Cinza escuro (Preto para Títulos)

  const questionTypes = [
    { value: 'estrutura', label: 'Estrutura', icon: <FitnessCenterIcon />, color: '#1976d2' }, 
    { value: 'limpeza', label: 'Limpeza', icon: <CleanHandsIcon />, color: '#2e7d32' }, 
    { value: 'equipe', label: 'Equipe', icon: <GroupsIcon />, color: '#ed6c02' } 
  ];

  const handleAddQuestion = () => {
    if (!currentQuestion.text.trim()) {
      showSnackbar('Por favor, digite a pergunta', 'error');
      return;
    }

    const newQuestion = {
      id: Date.now(),
      text: currentQuestion.text,
      type: currentQuestion.type,
      isDescriptive: currentQuestion.isDescriptive
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion({
      text: '',
      type: 'estrutura',
      isDescriptive: false
    });
    showSnackbar('Pergunta adicionada com sucesso!', 'success');
  };

  const handleDeleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
    showSnackbar('Pergunta removida', 'info');
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const getTypeInfo = (type) => {
    return questionTypes.find(qt => qt.value === type);
  };

  return (
    <Box sx={{ 
      p: 3, 
      maxWidth: 1200, 
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Box sx={{ p: 1, mb: 4, textAlign: 'left' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: SECONDARY_COLOR, fontWeight: 'bold' }}>
          Gerenciador de Perguntas
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
          Crie perguntas personalizadas e categorizadas
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ fontWeight: 'bold', color: SECONDARY_COLOR }} 
            >
              Nova Pergunta
            </Typography>
            
            <Box component="form" sx={{ mt: 3 }}>
              <TextField
                fullWidth
                label="Digite a pergunta"
                value={currentQuestion.text}
                onChange={(e) => setCurrentQuestion({ ...currentQuestion, text: e.target.value })}
                multiline
                rows={3}
                placeholder="Ex: Como você avalia o estado dos equipamentos?"
                sx={{ mb: 3 }}
              />

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Tipo de Pergunta</InputLabel>
                <Select
                  value={currentQuestion.type}
                  label="Tipo de Pergunta"
                  onChange={(e) => setCurrentQuestion({ ...currentQuestion, type: e.target.value })}
                >
                  {questionTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {type.icon}
                        {type.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControlLabel
                control={
                  <Switch
                    checked={currentQuestion.isDescriptive}
                    onChange={(e) => setCurrentQuestion({ ...currentQuestion, isDescriptive: e.target.checked })}
                    sx={{ 
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: PRIMARY_COLOR,
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: PRIMARY_COLOR,
                      },
                    }}
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {currentQuestion.isDescriptive ? 
                      <SubjectIcon sx={{ color: PRIMARY_COLOR }} /> : 
                      <ListIcon sx={{ color: SECONDARY_COLOR }} />
                    }
                    <Typography>
                      {currentQuestion.isDescriptive ? 'Pergunta Descritiva' : 'Pergunta Objetiva'}
                    </Typography>
                  </Box>
                }
              />

              <Box sx={{ mb: 2 }} />

              <Button
                variant="contained"
                size="large"
                startIcon={<AddIcon />}
                onClick={handleAddQuestion}
                fullWidth
                sx={{
                  py: 1.5,
                  bgcolor: PRIMARY_COLOR, 
                  '&:hover': { bgcolor: DARK_PRIMARY },
                  fontSize: '1.1rem'
                }}
              >
                Adicionar Pergunta
              </Button>
            </Box>

            {/* Instructions */}
            <Paper elevation={1} sx={{ p: 2, mt: 3, bgcolor: LIGHT_BG, borderLeft: `4px solid ${PRIMARY_COLOR}` }}> 
              <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem', fontWeight: 'bold', color: SECONDARY_COLOR }}>
                💡 Dicas para boas perguntas:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon sx={{ color: PRIMARY_COLOR, minWidth: 24 }}>•</ListItemIcon>
                  <ListItemText primary="Seja claro e objetivo" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ color: PRIMARY_COLOR, minWidth: 24 }}>•</ListItemIcon>
                  <ListItemText primary="Use linguagem simples" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ color: PRIMARY_COLOR, minWidth: 24 }}>•</ListItemIcon>
                  <ListItemText primary="Foque em um aspecto por pergunta" />
                </ListItem>
              </List>
            </Paper>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: SECONDARY_COLOR }}>
                Perguntas Criadas
              </Typography>
              <Chip 
                label={`${questions.length} pergunta(s)`} 
                sx={{ bgcolor: PRIMARY_COLOR, color: 'white', fontWeight: 'bold' }} 
              />
            </Box>

            <Divider sx={{ mb: 3 }} />

            {questions.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <FitnessCenterIcon sx={{ fontSize: 64, color: '#ccc', mb: 2 }} />
                <Typography variant="h6" color="textSecondary">
                  Nenhuma pergunta criada ainda
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Comece adicionando sua primeira pergunta!
                </Typography>
              </Box>
            ) : (
              <Box sx={{ maxHeight: 500, overflow: 'auto' }}>
                {questions.map((question) => {
                  const typeInfo = getTypeInfo(question.type);
                  return (
                    <Card key={question.id} sx={{ mb: 2, borderLeft: `4px solid ${PRIMARY_COLOR}` }}> 
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                          <Typography variant="h6" sx={{ fontSize: '1rem', flex: 1, color: SECONDARY_COLOR }}>
                            {question.text}
                          </Typography>
                          <IconButton 
                            size="small" 
                            onClick={() => handleDeleteQuestion(question.id)}
                            sx={{ color: '#d32f2f' }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                        
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                          <Chip
                            icon={typeInfo.icon}
                            label={typeInfo.label}
                            size="small"
                            variant="outlined"
                            sx={{ borderColor: typeInfo.color, color: typeInfo.color }} 
                          />
                          <Chip
                            icon={question.isDescriptive ? <SubjectIcon /> : <ListIcon />}
                            label={question.isDescriptive ? 'Descritiva' : 'Objetiva'}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              borderColor: question.isDescriptive ? PRIMARY_COLOR : SECONDARY_COLOR, 
                              color: question.isDescriptive ? PRIMARY_COLOR : SECONDARY_COLOR 
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            )}

            {questions.length > 0 && (
              <Box sx={{ mt: 3, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                <Button
                  variant="outlined"
                  sx={{ 
                    borderColor: PRIMARY_COLOR, 
                    color: PRIMARY_COLOR, 
                    '&:hover': { 
                      borderColor: DARK_PRIMARY, 
                      backgroundColor: 'rgba(178, 94, 9, 0.04)' 
                    } 
                  }}
                  fullWidth
                  onClick={() => {
                    showSnackbar('Perguntas salvas com sucesso!', 'success');
                  }}
                >
                  Salvar Questionário
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default QuestionManagement;