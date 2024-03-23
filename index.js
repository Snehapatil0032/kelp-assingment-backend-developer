//This File is developed by sneha patil
const csvtojsonv = require('csvtojson')

const csvfilepath = "simple.csv"
//This File is developed by sneha patil
csvtojsonv()
.fromFile(csvfilepath)
.then((json)=>{
    console.log(json)
})
//This File is developed by sneha patil
