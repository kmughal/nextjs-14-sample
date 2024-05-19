import { Sequelize, DataTypes } from 'sequelize';
import * as pg from "pg";
import { Client } from 'pg';  // Importing Client from pg for database creation check

const user = 'postgres';
const password = 'password';
const host = 'localhost';
const port = 5432;
const database = 'test-db';

// Function to check and create the database if it doesn't exist
async function ensureDatabaseExists() {
    const client = new Client({
        user,
        password,
        host,
        port,
        database: 'postgres'  // Connect to the default 'postgres' database to check
    });

    try {
        await client.connect();
        const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${database}'`);
        if (res.rowCount === 0) {

            await client.query(`CREATE DATABASE "${database}"`);
            console.log(`Database ${database} created successfully.`);
        } else {
            console.log(`Database ${database} already exists.`);
        }
    } catch (error) {
        console.error('Error checking or creating database:', error);
    } finally {
        await client.end();
    }
}

async function connect() {
    await ensureDatabaseExists();
    const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;
    const sequelize = new Sequelize(connectionString, {
        dialectModule: pg,
    });

    // Define the Document model
    const Document = sequelize.define('Document', {
        authorName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        documentName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publishDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log('Database sync complete.');
        return Document;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect().then((Document) => {
    if (Document) {
        console.log('Database setup complete.');
    }
});

export default connect;
