import express from 'express';
const app = express();
import 'dotenv/config';
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('hello cok')
});

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`)
});