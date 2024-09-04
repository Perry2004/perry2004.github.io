import express from 'express';
import router from './router.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../frontend/'));
app.use(router);

app.set('view engine', 'ejs');

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening: port ${PORT}`);
});