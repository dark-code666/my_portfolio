import { Box, Typography, Card, CardContent } from "@mui/material";

const experiences = [
  {
    title: "Freelancer - Desarrollo de Software",
    date: "Junio 2025 - Actualidad",
    details: [
      "Creación de sistema web de préstamos con ASP.NET Core y React (TypeScript, Vite).",
      "Desarrollo del backend de una app móvil de logística.",
      "Diseño e implementación de bases de datos (Code First / Data First).",
      "Administración de bases de datos: respaldos, procedimientos, triggers.",
      "Sistema de inventario para funeraria usando Flutter.",
    ],
  },
  {
    title: "Desarrollador de Software - Zebra",
    date: "Junio 2024 - Mayo 2025",
    details: [
      "Desarrollo de módulos de control y gestión de inventarios.",
      "Integración de servicios backend en .NET y React.",
      "Trabajo colaborativo bajo metodologías ágiles y GitHub.",
    ],
  },
  {
    title: "Desarrollador de Software - ZAFI",
    date: "Octubre 2022 - Mayo 2024",
    details: [
      "Desarrollo e implementación de sistemas contables empresariales.",
      "Pruebas unitarias y resolución de incidencias técnicas.",
      "Uso de Azure DevOps para sprints, control de cambios y versiones.",
      "Integración de módulos críticos con DevExpress y LINQ.",
    ],
  },
];

export default function Experience() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Experiencia Laboral
      </Typography>
      {experiences.map((exp) => (
        <Card key={exp.title} sx={{ mb: 3, backgroundColor: "background.paper" }}>
          <CardContent>
            <Typography variant="h6">{exp.title}</Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {exp.date}
            </Typography>
            {exp.details.map((d, i) => (
              <Typography key={i} variant="body2" color="text.secondary">
                • {d}
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
