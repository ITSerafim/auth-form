import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './config/db';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


async function bootstrap(): Promise<void> {
    await db.authenticate();
    try {
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

bootstrap();