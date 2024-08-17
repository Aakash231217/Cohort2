import { Client } from "pg";

async function insertData(username:string, email:string, password:string){
    const client =  new Client({
        connectionString:"postgresql://rktaakash:veZ4y8YDHMmz@ep-withered-shadow-a5yk6cvp.us-east-2.aws.neon.tech/cohort?sslmode=require",

    });


    try{
        await client.connect();
        const insertQuery = "INSERT INTO users(username,email,password) VALUES($1,$2,$3)";
        const values = [username,email,password];
        const res = await client.query(insertQuery,values);
        console.log('Insertion success',res);
    }catch(err){
        console.error("Error in insertion",err);
    }finally{
        await client.end();
    }
}

insertData('username5','username@example.com','user_password').catch(console.error);