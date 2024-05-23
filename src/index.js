import express from 'express';
import 'dotenv/config'
import {initializeDatabase} from './config/database.js'

const app = express();
app.use(express.json());
const orm = await initializeDatabase();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});