import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function About() {
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
        Sobre mí
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ textAlign: "justify" }}
      >
        Soy desarrollador de software con más de 3 años de experiencia en el
        diseño, desarrollo e implementación de sistemas contables y
        empresariales. Experto en tecnologías Microsoft (.NET, C#, SQL Server) y
        React con TypeScript. He desarrollado sistemas web completos desde cero,
        participado en backends para aplicaciones móviles de logística y tengo
        experiencia en pruebas unitarias, control de versiones, metodologías
        ágiles y despliegue en Azure. Además, he creado un sistema de inventario
        para una funeraria utilizando Flutter. Me destaco por mi capacidad de
        adaptación, resolución de problemas y enfoque en la calidad del código.
      </Typography>
    </Box>
  );
}
