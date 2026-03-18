const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

let testimonials = [
  {
    id: 1,
    name: "Cristina Hernández",
    relation: "Coordinadora de Anfitriones UFM",
    message: "Excelente colaboradora, muy comprometida y con gran capacidad de liderazgo.",
    date: "2026-03-18"
  },
  {
    id: 2,
    name: "Mayra Rámirez",
    relation: "Directora de Atención al Estudiante UFM",
    message: "Muy profesional y dedicada, siempre dispuesta a ayudar y mejorar los procesos.",
    date: "2026-03-05"
  }
];
let nextId = 3;
// GET / - Bienvenida
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la sección de Referencias' });
});

// GET /testimonials - Ver todos los testimonios
app.get('/testimonials', (req, res) => {
  res.json(testimonials);
});

// GET /testimonials/:id - Ver un testimonio específico
app.get('/testimonials/:id', (req, res) => {
  const testimonial = testimonials.find(t => t.id === parseInt(req.params.id));

  if (!testimonial) {
    return res.status(404).json({ error: 'Referencia no encontrada' });
  }

  res.json(testimonial);
});

