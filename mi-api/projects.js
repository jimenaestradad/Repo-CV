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
app.get('/testimonials/:id', (req, res) => {cs
  const testimonial = testimonials.find(t => t.id === parseInt(req.params.id));

  if (!testimonial) {
    return res.status(404).json({ error: 'Referencia no encontrada' });
  }

  res.json(testimonial);
});

// POST /testimonials - Crear un testimonios
app.post('/testimonials', (req, res) => {
  const { name, stars } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'El campo "name" es requerido' });
  }

  const newTestimonial = {
    id: nextId++,
    name,
    stars: stars || 0,
  };

  testimonials.push(newTestimonial);
  res.status(201).json(newTestimonial);
});

// PATCH /testimonials/:id - Actualizar un testimonio
app.patch('/testimonials/:id', (req, res) => {
  const index = testimonials.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Referencia no encontrada' });
  }

  testimonials[index] = { ...testimonials[index], ...req.body };
  res.json(testimonials[index]);
});

// DELETE /testimonials/:id - Eliminar un testimonio
app.delete('/testimonials/:id', (req, res) => {
  const index = testimonials.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Referencia no encontrada' });
  }

  const deleted = testimonials.splice(index, 1);
  res.json({ message: 'Referencia eliminada', testimonial: deleted[0] });
});

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
