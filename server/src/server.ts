import express from 'express';

const app = express()

app.get('/user', (req, res) => {
  return res.json([
    {
      name: 'Marlon Victor',
      age: 20
    }
  ])
})

app.listen(3333)