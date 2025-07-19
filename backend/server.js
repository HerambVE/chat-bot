import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());

app.post('/', (req, res) => {
    res.send({reply:"suck my dick"});
});

app.get('/', (req, res) => {
    res.send('hello cok');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
