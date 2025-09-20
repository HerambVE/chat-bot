import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { getEmo } from './services/colab.js';

const app = express();
const PORT = process.env.PORT;

app.use(
    cors({origin: 'http://localhost:5173',}),
    express.json()
);

app.get('/', (req, res) => {
    res.send('This is a functioning webpage ;)');
});

app.post('/message', async (req, res) => {
    try {
        let inputText = req.body.text;
        if (!inputText || inputText === "") {
            return res.status(400).send({ error: "No Text Provided" });
        }
        res.json(await getEmo(inputText));
    } catch (err) {
        console.error("Error in /message:", err);
        res.status(500).send({ error: "Internal Server Error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
