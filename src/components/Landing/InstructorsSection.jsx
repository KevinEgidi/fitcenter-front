import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Container
} from '@mui/material';
import { instructors } from '../../utils/mocks';

export default function InstructorsSection() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Nuestros Instructores
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {instructors.map((inst) => (
          <Grid item xs={12} sm={6} md={4} key={inst.id}>
            <Card>
              <CardMedia component="img" height="200" image={inst.image} alt={inst.name} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {inst.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Especialidad: {inst.specialty}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}