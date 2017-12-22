const fs = require('fs')
const ejs = require('ejs')

const render = () => {
  renderEjs(getData())
}

const getData = () => {
  const json = 'build/data.json'
  const data = JSON.parse(fs.readFileSync(json, 'utf8'))

  return data
}

const renderEjs = (data) => {
  console.log(data)
}

(() => render())()
