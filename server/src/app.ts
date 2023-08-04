import express from 'express';
import NoteRouter from './routes/noteRoutes';
import cors from 'cors';

const app = express();
const port = 4444;

app.use(cors());
app.use(express.json());
app.use('/notes', NoteRouter);

const server = app.listen(port, () => {

  return console.log(`server is listening on ${port}`);
});
server.on('error', e => console.error("Error", e));
