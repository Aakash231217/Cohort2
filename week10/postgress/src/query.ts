import { Client } from "pg";

async function getUser(email: string){
    const client = new Client({
        connectionString:"postgresql://rktaakash:veZ4y8YDHMmz@ep-withered-shadow-a5yk6cvp.us-east-2.aws.neon.tech/cohort?sslmode=require",

    });

    try{
        await client.connect();
        const query = `SELECT * FROM users WHERE email = $1`;
        const result = await client.query(query,[email]);
        if(result.rows.length>0){
            console.log('User found',result.rows[0]);
            return result.rows[0];
        }else{
            console.log("NO user found with given email");
            return null;
        }
    }
    catch(err){
        console.error('Error during fetching details user:',err);
        throw err;
    }
    finally{
        await client.end();
    }
}

getUser('username@example.com').catch(console.error);