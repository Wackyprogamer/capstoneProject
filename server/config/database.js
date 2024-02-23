const pg = require('pg');

const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Unicycle17?",
  port: 5432,
});

client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});

module.exports = client;

  