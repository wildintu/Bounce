import * as express from 'express';
import apiRouter from './routes';
import * as path from 'path';

const app = express();
app.use(express.json());


app.use(express.static('public'));
app.use(apiRouter);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
});
// app.get(["/","/Forms","/Session/:id/admin","/Session/:id/details"], (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')))


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
