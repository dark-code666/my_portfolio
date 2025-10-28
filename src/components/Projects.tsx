import { Box, Typography, Card, CardContent, CardActions, Button } from "@mui/material";

const projects = [
  {
    title: "Sistema Web de Préstamos",
    description: "Aplicación completa con ASP.NET Core y React (TypeScript, Vite).",
    link: "https://github.com/tuusuario/loan-system",
  },
  {
    title: "Sistema de Inventario Funeraria",
    description: "Aplicación creada con Flutter para control de inventario.",
    link: "https://github.com/tuusuario/funeral-inventory",
  },
  {
    title: "Módulo de Logística",
    description: "Backend de aplicación móvil para rastreo y control de entregas.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <Box sx={{ py: 8 }}>
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
            <Button size="small" href={p.link} target="_blank">
              Ver más
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
