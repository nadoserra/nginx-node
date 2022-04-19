const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')


app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    const sqlInsert = `INSERT INTO people(name) values('Rinaldo Serra')`
    connection.query(sqlInsert)
    connection.query('SELECT * FROM people', (err, response) => {
        res.send(`<h1>Full Cycle Rocks</h1> <br> <ul>${response.map(user => `<li>${user.name}</li>`)}</ul>`)
    });

    connection.end()
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})