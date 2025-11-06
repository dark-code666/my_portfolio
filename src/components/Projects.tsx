import { useEffect, useRef, useState } from "react";
import { Box, Typography, Card, CardContent, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  route?: string; // ruta interna
  link?: string;  // enlace externo
}

const projects: Project[] = [
  {
    title: "Sistema Web de Préstamos",
    description: "Aplicación completa con ASP.NET Core y React (TypeScript, Vite).",
    route: "/credipath", 
  },
  {
    title: "Sistema de Inventario Funeraria",
    description: "Aplicación creada con Flutter para control de inventario.",
    link: "https://github.com/tuusuario/funeral-inventory",
  },
  {
    title: "Sistema POS",
    description: "Aplicacion POS hecha con C#, linq y devexpress.",
    route: "#",
  },
  {
    title: "Sistema ERP",
    description: "Sistema contable empresarial desarrollado en C# linq y devexpress.",
    route: "#",
  }
];

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

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
        Proyectos
      </Typography>

      {projects.map((p) => (
        <Card key={p.title} sx={{ mb: 3, backgroundColor: "background.paper" }}>
          <CardContent>
            <Typography variant="h6">{p.title}</Typography>
            <Typography color="text.secondary">{p.description}</Typography>
          </CardContent>
          <CardActions>
            {p.route ? (
              <Button
                size="small"
                onClick={() => {
                  if (p.route) {
                    navigate(p.route);
                  }
                }}
              >
                Ver más
              </Button>
            ) : (
              p.link && (
                <Button
                  size="small"
                  component="a"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más
                </Button>
              )
            )}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
