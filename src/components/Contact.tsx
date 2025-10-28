import { Box, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contáctame
      </Typography>
      <Box component="form" sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Nombre" fullWidth />
        <TextField label="Correo" fullWidth />
        <TextField label="Mensaje" fullWidth multiline rows={4} />
        <Button variant="contained" color="primary" size="large">
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
