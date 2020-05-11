const fs = require('fs')


const humanBuffer = fs.readFileSync('1-json.json')
const humanData = humanBuffer.toString()
const human = JSON.parse(humanData)

human.name = "Mohcine"
human.age = 34

const humanJSON = JSON.stringify(human)
fs.writeFileSync('1-json.json', humanJSON)