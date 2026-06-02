import express = require('express');

type Request = import('express').Request;
type Response = import('express').Response;

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Olá, Mundo, com deploy com CI e CD! agora ta certo');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});