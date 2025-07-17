import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Grid,
} from '@mui/material';
import {CheckCircleOutline, FitnessCenter, AttachMoney} from '@mui/icons-material';
import { plans } from '../../utils/mocks';

export default function MembershipPlan() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubscribe = (planTitle) => {
    alert(`Has seleccionado la ${planTitle}. ¡Redirigiendo para el pago!`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.dark, mb: 4 }}>
        Elige tu Plan de Membresía
      </Typography>

      <Grid container spacing={2} direction={isSmallScreen ? 'column' : 'row'} justifyContent="center">
        {plans.map((plan) => (
          <Grid key={plan.id}> 
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: plan.featured ? '0px 15px 40px rgba(0, 0, 0, 0.2)' : '0px 5px 15px rgba(0, 0, 0, 0.1)',
                p: isSmallScreen ? 0.5 : 1, 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                background: plan.featured ? 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)' : 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)',
                color: plan.featured ? 'white' : 'inherit', 
                border: plan.featured ? `2px solid ${theme.palette.primary.dark}` : `1px solid ${theme.palette.primary.light}`, 
                height: '100%', 
              }}
            >
              <Box sx={{ mb: 0.5 }}> 
                <FitnessCenter sx={{ fontSize: 50, color: plan.featured ? 'white' : theme.palette.primary.main }} />
              </Box>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: plan.featured ? 'white' : theme.palette.primary.dark }}>
                {plan.title}
              </Typography>
              <Typography variant="body2" color={plan.featured ? 'rgba(255,255,255,0.8)' : 'text.secondary'} sx={{ mb: 1, maxWidth: '90%' }}>
                {plan.description}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1, justifyContent: 'center' }}>
                <Typography variant="h3" component="span" sx={{ fontWeight: 'bold', color: plan.featured ? 'white' : theme.palette.success.main }}>
                  <AttachMoney sx={{ fontSize: '2.2rem', verticalAlign: 'middle' }} />
                  {plan.price}
                </Typography>
                <Typography variant="h5" component="span" sx={{ ml: 0.5, color: plan.featured ? 'rgba(255,255,255,0.8)' : 'text.secondary' }}>
                  /{plan.billingCycle}
                </Typography>
              </Box>

              <CardContent sx={{ width: '100%', p: 0, pb: 1 }}>
                <List sx={{ width: '100%', maxWidth: 360, mx: 'auto', mb: 2 }}> 
                  {plan.features.map((feature, index) => (
                    <ListItem key={index} disableGutters sx={{ py: 0.2 }}> 
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleOutline sx={{ fontSize: '1.1rem', color: plan.featured ? 'white' : theme.palette.primary.main }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} primaryTypographyProps={{ variant: 'body2', color: plan.featured ? 'rgba(255,255,255,0.9)' : theme.palette.text.primary }} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>

              <CardActions sx={{ width: '100%', justifyContent: 'center', px: isSmallScreen ? 1 : 2, pb: isSmallScreen ? 1 : 2 }}>
                <Button
                  variant={plan.featured ? 'contained' : 'outlined'}
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={() => handleSubscribe(plan.title)}
                  sx={{
                    borderRadius: 2,
                    py: 0.8,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    boxShadow: plan.featured ? '0px 6px 20px rgba(0, 0, 0, 0.4)' : '0px 2px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: plan.featured ? 'white' : theme.palette.primary.main,
                    color: plan.featured ? theme.palette.primary.main : 'white',
                    borderColor: theme.palette.primary.main,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: plan.featured ? '0px 8px 25px rgba(0, 0, 0, 0.5)' : '0px 4px 15px rgba(0, 0, 0, 0.2)',
                      backgroundColor: plan.featured ? 'rgba(255,255,255,0.9)' : theme.palette.primary.dark,
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {plan.callToAction}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
