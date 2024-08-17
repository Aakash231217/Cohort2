import {Client} from 'pg';




const client =  new Client({
  /*  host:'mydatabse',
    port:5334,
    database:'database-name',
    user:'database-user',
    password:'secret-password',*/

    connectionString:"postgresql://rktaakash:veZ4y8YDHMmz@ep-withered-shadow-a5yk6cvp.us-east-2.aws.neon.tech/cohort?sslmode=require",
})


async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(244) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );

        `)
    console.log(result);
}

createUsersTable();