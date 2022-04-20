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

    // Creates Table
    const createTable = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);`
    connection.query(createTable);

    //insert data
    const sqlInsert = `INSERT INTO people(name) values('Rinaldo Serra')`
    connection.query(sqlInsert)

    //get people
    connection.query('SELECT * FROM people', (err, response) => {
        res.send(`<h1>Full Cycle Rocks</h1> <br> <ul>${response.map(user => `<li>${user.name}</li>`)}</ul>`)
    });

    connection.end()
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})