const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM usuario', (err, results) => {
        if (err) {
            console.log('Error en la consulta', err);
            res.status(500).json({error: 'Error interno del servidor'});
            return
        }
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { username, password } = req.body;

    console.log(username, password);

    const query = `SELECT * FROM usuario WHERE nombre_usuario = '${username}' AND contraseña = '${password}'`;

    connection.query(query, (err, results) => {
        if (err) {
            console.log('Error al realizar la consulta: ', err);
            res.sendStatus(500);
        } else {
            if (results.length > 0) {
                res.sendStatus(200);
            } else {
                res.sendStatus(401);
            }
        }
    });
});

module.exports =router;