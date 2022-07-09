const { Client } = require('pg');
const url='postgres://lfkvqpotyzxbzh:73b94a1d0e9068c35989ed8fe0873f394cf75ca3796d87a30c62063d1ce06de3@ec2-44-206-11-200.compute-1.amazonaws.com:5432/df6be3uva5dtsc';
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
    console.log(rows);
    return rows;
}

module.exports = {
  query
}