"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://rktaakash:veZ4y8YDHMmz@ep-withered-shadow-a5yk6cvp.us-east-2.aws.neon.tech/cohort?sslmode=require",
        });
        try {
            yield client.connect();
            const query = `SELECT * FROM users WHERE email = $1`;
            const result = yield client.query(query, [email]);
            if (result.rows.length > 0) {
                console.log('User found', result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("NO user found with given email");
                return null;
            }
        }
        catch (err) {
            console.error('Error during fetching details user:', err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
getUser('username@example.com').catch(console.error);
