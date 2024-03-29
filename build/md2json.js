const fs = require('fs')
const marked = require('marked')

const md2json = () => {
  getData()
}

const getData = () => {
  fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      createSchema(marked(data))
    }
  })
}

const createSchema = (data) => {
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

const convertJson = (obj) => {
  const json = JSON.stringify(obj)

  fs.writeFile('data.json', json, (err) => {
    if (err) {
      throw err
    } else {
      console.log('Created json file.')
    }
  })
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

(() => md2json())()
