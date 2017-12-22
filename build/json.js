const fs = require('fs')
const marked = require('marked')
const config = require('../config.json')

const getData = () => {
  fs.readFile(config.inputFile, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      convertMarkdownToHtml(data);
    }
  })
}

const convertMarkdownToHtml = (data) => {
  createData(marked(data))
}

const createData = (data) => {
  const row = data.split(/<!--[\s\S]*?-->/g)
  let obj = []
  let id = getPageId(data)
  let title = getPageTitle(data)

  for (let i = 0; i < row.length; i++) {
    if (i > 0) {
      obj.push({
        id: id[i],
        title: title[i],
        body: row[i]
      })
    } else {
      obj.push({
        id: id[i],
        title: title[i],
        body: row[i]
      })
    }
  }

  convertJson(obj)
}

const getPageId = (data) => {
  const ids = data.match(/<!--[\s\S]*?-->/g)
  let id = ['index']

  for (let i = 0; i < ids.length; i++) {
    id.push(ids[i].split(' ')[1])
  }

  return id
}

const getPageTitle = (data) => {
  const titles = data.match(/<h[1-2][\s\S]*?>[\s\S]*?<\/h[1-2]>/g)
  let title = []

  for (let i = 0; i < titles.length; i++) {
    title.push(titles[i].split(/<h[1-2][\s\S]*?>/)[1].split(/<\/h[1-2]>/)[0])
  }

  return title
}

const convertJson = (obj) => {
  // convert
}

(() => getData())()