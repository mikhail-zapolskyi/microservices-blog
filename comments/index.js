import express from 'express';
import { randomBytes } from 'crypto';
import cors from 'cors';

const app = express();
const commentsByPostId = {};

app.use(express.json());
app.use(cors());

app.get('/posts/:id/comments', (req, res) => {
     
     res.status(200).send(commentsByPostId[req.params.id] || []);
})

app.post('/posts/:id/comments', (req, res) => {
     console.log(req.params)
     const commentId = randomBytes(4).toString('hex');
     const { content } = req.body;

     const comments = commentsByPostId[req.params.id] || [];
console.log(comments);
     comments.push({ id: commentId, content });

     commentsByPostId[req.params.id] = comments;

     res.status(201).send(comments);

})

app.listen(4001, () => {
     console.log(('Listening on 4001'))
})