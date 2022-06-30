import express from 'express';
import { randomBytes } from 'crypto';
import cors from 'cors';

const app = express();
const posts = {};

app.use(express.json());
app.use(cors());

app.get('/posts', (req, res) => {
     res.status(200).send(posts);
})

app.post('/posts', (req, res) => {
     const id = randomBytes(4).toString('hex');
     const { title } = req.body;

     posts[id] = { id, title };


     res.status(201).json({ message: 'post added',  id: posts[id] })
})

app.listen(4000, () => {
     console.log(('Listening on 4000'))
})