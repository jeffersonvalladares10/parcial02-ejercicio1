const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuración para usar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static('public'));

// Página de bienvenida
app.get('/', (req, res) => {
    res.render('welcome');
});

// Página del formulario
app.get('/form', (req, res) => {
    res.render('form', { error: null });
});

// Procesar datos del formulario
app.post('/submit', (req, res) => {
    const { nombre, edad, email } = req.body;

    // Validación simple
    if (!nombre || !edad || !email) {
        return res.render('form', { error: 'Todos los campos son obligatorios.' });
    }

    // Redirigir a la página de confirmación
    res.render('confirmation', { nombre, edad, email });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
