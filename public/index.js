import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import Product from './classProduct.js'

const formAddProduct = document.getElementById('formAddProduct')
const input_id = document.getElementById('input_id')

const newId = uuidv4() 
input_id.value = newId

formAddProduct.onsubmit = e => {
  e.preventDefault()
  console.log('ID:', e.target.input_id.value)
  console.log('Title:', e.target.input_title.value)
  console.log('Description:', e.target.input_description.value)
  console.log('Code:', e.target.input_code.value)
  console.log('Price:', e.target.input_price.value)
  console.log('Stock:', e.target.input_stock.value)
  console.log('Status:', e.target.input_status.value)
  console.log('Category:', e.target.input_category.value)
  console.log('Thunbnails:', e.target.input_thunbnails.value)

  const newProduct = new Product(
    e.target.input_id.value,
    e.target.input_title.value,
    e.target.input_description.value,
    e.target.input_code.value,
    e.target.input_price.value,
    e.target.input_status.value,
    e.target.input_stock.value,
    e.target.input_category.value,
    e.target.input_thunbnails.value
  )

  const res = await fetch('http://localhost:8080/products',{
    method:'POST',
    headers:{
      "Content-type:" : "aplication/json"
    },
    body: newProduct
  })
  console.log(newProduct)
  // const jsonString = JSON.stringify(newProduct.toJSON());
  // const parsedObject = JSON.parse(jsonString);
  // console.log(JSON.parse(newProduct))
}
