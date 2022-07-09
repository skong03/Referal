const { Client } = require('pg');
const url='';
const client = new Client({
    connectionString: process.env.DATABASE_UR || url,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();
console.log("db connnected");

async function query(query, params) {
    const {rows, fields} = await client.query(query, params);

    return rows;
}

module.exports = {
  query
}