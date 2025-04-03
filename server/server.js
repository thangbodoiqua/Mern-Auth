import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRoute from './routes/authRoute.js';
const app = express();
const port = process.env.PORT || 4000;
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
}));
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
    res.send('cdb')
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});