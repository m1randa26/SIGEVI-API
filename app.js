const express = require('express');
const cors = require('cors');
const db = require('./db');
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

db.connect(err => {
    if (err) {
        console.log('Error', err);
        return;
    }

    console.log('EXITO');
});

const userRouter = require('./routes/usuarios');
app.use('/usuarios', userRouter);

app.listen(port, () => {
    console.log(`Servidor en el puerto: ${port}`);
});