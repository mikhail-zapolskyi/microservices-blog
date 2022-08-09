import express from 'express';
import { randomBytes } from 'crypto';
import cors from 'cors';
import axios from 'axios';

const app = express();
const posts = {};

app.use(express.json());
app.use(cors());

app.get('/posts', (req, res) => {
     res.status(200).send(posts);
})

app.post('/posts/create', async (req, res) => {
     const id = randomBytes(4).toString('hex');
     const { title } = req.body;

     posts[id] = { id, title };

     await axios.post('http://event-bus-srv:4005/events', {
          type: 'PostCreated', 
          data: {
               id, title
          }
     })

     res.status(201).json({ message: 'post added',  id: posts[id] })
})

app.post('/events', (req, res) => {
     console.log(req.body)
     res.send({});
})

app.listen(4000, () => {
     console.log(('Listening on 4000'))
})