import cookieParser from 'cookie-parser';
import { config } from "dotenv";
import express from 'express';
import entrepreneurRouter from "./routes/entrepreneur.js";
import userRouter from './routes/user.js';
import cors from "cors";
export const app = express();


config({
    path:'./data/config.env'
})

// Using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
}))


app.use("/api/v1/users",userRouter);
app.use("/api/v1/form",entrepreneurRouter);

app.get("/",(req,res)=>{
    res.send('Nice Working');
});


