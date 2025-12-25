import { Client } from "pg";
const pgClient = new Client('postgresql://neondb_owner:npg_eu81vCZspISl@ep-orange-sea-a4wps4fp-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
async function main() {
    await pgClient.connect();
    const response = await pgClient.query(`
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
`);
    console.log(response);
}
main();
//# sourceMappingURL=index.js.map