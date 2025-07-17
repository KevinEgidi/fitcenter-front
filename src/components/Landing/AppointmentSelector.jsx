import React, { useState } from "react";
import { Container, Typography, Box, Button, FormControl, InputLabel, Select, MenuItem, TextField  } from "@mui/material";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { instructors } from "../../utils/mocks";

export default function AppointmentSelector() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [instructor, setInstructor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Turno reservado el ${date?.format("DD/MM/YYYY")} a las ${time?.format("HH:mm")} con ${instructor}`);
    setDate(null);
    setTime(null); 
    setInstructor("");
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Agenda tu turno
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            justifyContent: "center",
            mt: 4,
          }}
        >
          <DatePicker
            label="Fecha"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            renderInput={(params) => <TextField {...params} required />}
          />
          <TimePicker
            label="Hora"
            value={time}
            onChange={(newValue) => setTime(newValue)}
            renderInput={(params) => <TextField {...params} required />}
          />
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel id="instructor-label">Instructor</InputLabel>
            <Select
              labelId="instructor-label"
              label="Instructor"
              value={instructor}
              required
              onChange={(e) => setInstructor(e.target.value)}
            >
              {instructors.map((inst) => (
                <MenuItem key={inst.id} value={inst.name}>
                  {inst.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" size="large">
            Reservar
          </Button>
        </Box>
      </LocalizationProvider>
    </Container>
  );
}
