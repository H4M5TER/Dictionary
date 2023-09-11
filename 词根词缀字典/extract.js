const fs = require('fs')

let content = fs.readFileSync('./词根词缀字典.txt', 'utf-8')
let matches = [...content.matchAll(/(.+)\s+.+var mind=({.+});var options.+\s+<\/>/g)]
let data = {}
for (let match of matches)
  data[match[1]] = JSON.parse(match[2])

fs.writeFileSync('data.txt', JSON.stringify(data, null, 2), { 'encoding': 'utf-8' })
