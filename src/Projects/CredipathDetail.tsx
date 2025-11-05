import { useState } from "react";
import { Box, Typography, IconButton, Card, CardContent } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface CrediPathDetailProps {
  title: string;
  description: string;
  images: string[];
}

export default function CrediPathDetail({ title, description, images }: CrediPathDetailProps) {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "text.primary",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, textAlign: "center" }}>
        {title}
      </Typography>

      <Card
        sx={{
          maxWidth: 800,
          backgroundColor: "background.paper",
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              color: "text.secondary",
              mb: 4,
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            {description}
          </Typography>

          {/* Carrusel de imágenes */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <img
              src={images[index]}
              alt={`Imagen ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                transition: "opacity 0.5s ease-in-out",
              }}
            />

            {/* Botones de navegación */}
            <IconButton
              onClick={prevImage}
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "white",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              }}
            >
              <ArrowBack />
            </IconButton>

            <IconButton
              onClick={nextImage}
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "white",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              }}
            >
              <ArrowForward />
            </IconButton>

            {/* Indicadores de imágenes */}
            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
              }}
            >
              {images.map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: i === index ? "primary.main" : "grey.500",
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
