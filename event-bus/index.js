import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const events = [];

app.post('/events', (req, res) => {
     const event = req.body;

     events.push(event);

     axios.post('http://posts-clusterip-srv:4000/events', event).catch(err => console.log(err.message + " " + 4000));
     axios.post('http://comments-srv:4001/events', event).catch(err => console.log(err.message + " " + 4001));
     axios.post('http://query-srv:4002/events', event).catch(err => console.log(err.message + " " + 4002));
     axios.post('http://moderation-srv:4003/events', event).catch(err => console.log(err.message + " " + 4003));

     res.send({ status: 'ok' })
})

app.get('/events', (req, res) => {
     res.send(events);
})

app.listen(4005, () => {
     console.log('Event-bus running on port 4005')
})
