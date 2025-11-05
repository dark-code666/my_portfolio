import { useEffect, useRef, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contáctame
      </Typography>

      <Box
        component="form"
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <TextField label="Nombre" fullWidth />
        <TextField label="Correo" type="email" fullWidth />
        <TextField label="Mensaje" fullWidth multiline rows={4} />
        <Button variant="contained" color="primary" size="large">
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
