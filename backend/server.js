import express from 'express';
const app = express();
import 'dotenv/config';
const PORT = process.env.PORT  || 3000;

app.get('/', (req,res)=>{
    res.send('server is ready!')
});

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
});