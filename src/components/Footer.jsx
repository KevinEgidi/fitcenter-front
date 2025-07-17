import React from "react";
import { Box, Container, Grid, Typography, Stack, Link, IconButton } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
  <Box sx={{ bgcolor: "grey.900", color: "grey.300", py: 4, mt: 1 }}>
    <Container>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={4}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <FitnessCenterIcon color="primary" />
            <Typography variant="h6" color="common.white">
              FITCENTER
            </Typography>
          </Stack>
          <Typography variant="caption">© {new Date().getFullYear()} FitCenter. Todos los derechos reservados.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1" color="common.white" gutterBottom>
            Enlaces de interés
          </Typography>
          <Stack spacing={0.5}>
            <Link href="#" underline="hover" color="inherit">
              Acerca de
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Política de Privacidad
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Contacto
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <Typography variant="subtitle1" color="common.white" gutterBottom>
            Síguenos
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <GoogleIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
  )
};

export default Footer;