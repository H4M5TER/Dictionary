const fs = require('fs')
const data = require('./data.json')

let result = ''
for (let [k, v] of Object.entries(data))
  result += `${k}\r\n<link type="text/css" rel="stylesheet" href="jsmind.css"><script type="text/javascript" src="jsmind.js"></script><p id="jsmind_describe"></p><p id="jsmind_container"></p><script>jsMind.show({},${JSON.stringify(v)});document.getElementById('jsmind_container').style.height=document.querySelector('svg.jsmind').scrollHeight;</script>\r\n</>\r\n`

fs.writeFileSync('output.txt', result.slice(0, -2), { encoding: 'utf-8' })
