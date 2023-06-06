const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');

app.use(express.json());

app.engine('.hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const imagen1 = [
        { ruta: '/assets/img/jugo.jpg', descripcion: 'Jugo' }
    ];
    const imagen2 = [
        { ruta: '/assets/img/queso.jpg', descripcion: 'Queso' }
    ];const imagen3 = [
        { ruta: '/assets/img/mermelada.jpg', descripcion: 'Mermelada' }
    ];
    res.render('home', { imagen1, imagen2, imagen3 });
});

app.get('/personal', (req, res) => {
    res.render('personal');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Manejo de una ruta que no se encuentre
app.use((req, res) => {
    res.status(404).send('Página no encontrada - 404');
});

app.listen(3000);
console.log('Servidor corriendo OK');
