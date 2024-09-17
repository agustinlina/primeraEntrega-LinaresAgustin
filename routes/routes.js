import { Router } from 'express'
import fs, { write } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const router = Router()

//Obtengo absolute path del archivo
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const readData = () => {
  try {
    const data = fs.readFileSync(__dirname + '/testProducts.json')
    return JSON.parse(data)
  } catch (error) {
    console.log(error)
  }
}

const writeData = data => {
  try {
    fs.writeFileSync(__dirname + '/testProducts.json', JSON.stringify(data))
    return JSON.parse(data)
  } catch (error) {
    console.log(error)
  }
}

router.get('/products', (req, res) => {
  const data = readData()
  const limit = parseInt(req.query.limit, 10)
  const limitedData = isNaN(limit) || limit <= 0 ? data : data.slice(0, limit)
  res.json(limitedData)
})

router.get('/products/:id', (req, res) => {
  const data = readData()
  const id = parseInt(req.params.id)
  const getOneProduct = data.find(data => data.id === id)
  res.json(getOneProduct)
})

router.post('/products', (req, post) => {
  const data = readData()
  const body = req.body
  const newProduct = {
    id: Math.floor(Math.random * 99999),
    ...body
  }
  data.push(newProduct)
  write(data)
  res.json(newProduct)
})

export default router
