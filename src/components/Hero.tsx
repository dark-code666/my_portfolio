import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // deja de observar una vez que ya se mostró
        }
      },
      { threshold: 0.2 } // se activa cuando el 20% del componente es visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      component="section"
      id="hero"
      textAlign="center"
      sx={{
        py: 10,
        backgroundColor: "background.default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Ricardo Antonio Morales Sánchez
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom>
        Desarrollador de Software | .NET | React | TypeScript | Node.js | SQL | MySQL | Flutter
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
