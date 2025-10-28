import { Box, Typography, Button, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Hero() {
  return (
    <Box
      component="section"
      id="hero"
      textAlign="center"
      sx={{ py: 10, backgroundColor: "background.default" }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Ricardo Antonio Morales Sánchez
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom>
        Desarrollador de Software | .NET | React | TypeScript
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        mt={4}
      >
        <Button
          variant="contained"
          startIcon={<GitHub />}
          href="https://github.com/tuusuario"
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          startIcon={<LinkedIn />}
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          startIcon={<Email />}
          href="mailto:rm6192689@gmail.com"
        >
          Contacto
        </Button>
      </Stack>

      <Typography variant="body1" color="text.secondary" mt={3}>
        📍 Managua, Nicaragua · 📞 +505 7866 5134
      </Typography>
    </Box>
  );
}
