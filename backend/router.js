import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/public/index.html');
});

export { router as default };