// index.js
import express from 'express'
import routes from './routes/routes.js'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors' // permite el cross origin
const app = express()
const port = 8080

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(express.json()) //
app.use('/', routes)
app.use(express.static(__dirname + '/public'))
// app.use(function (req, res, next) {
//   res
//     .status(404)
//     .send('Sorry cant find that!<br><a href="/">Go back to home</a>')
// })

app.get('/', (req, res) => {
  res.sendFile('public/index.html')
})

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port} ...`)
})
