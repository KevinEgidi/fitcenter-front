import React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Divider,
} from "@mui/material";
import AppointmentSelector from "../components/Landing/AppointmentSelector";
import MembershipPlan from "../components/Landing/MembershipPlan";
import InstructorsSection from "../components/Landing/InstructorsSection";
import ProductsSection from "../components/Landing/ProductsSection";

export default function Landing() {
  return (
    <Box>
      <Box
      sx={{
        minHeight: "90vh",
        backgroundImage: "url(https://exude.com/wp-content/uploads/Exude-Fitness-Hero-Banner-Woman-Workout-Situp-Crunches.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 700 }} gutterBottom>
          Desata tu potencial
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Entrena con los mejores instructores y alcanza tus metas
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Únete hoy
        </Button>
      </Container>
    </Box>
      <AppointmentSelector/>
      <Divider />
      <ProductsSection />
      <Divider />
      <InstructorsSection />
      <Divider/>
      <MembershipPlan/>
      </Box>
  );
}
