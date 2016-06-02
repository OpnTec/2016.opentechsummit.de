var fs = require('fs-extra')
 
fs.copy('./programm/audio/', './Schedule/audio/',function (err) {
  if (err) return console.error(err)
  console.log("success!")
}) 
// copies file 
fs.copy('./programm/img/', './Schedule/img/',function (err) {
  if (err) return console.error(err)
  console.log("success!")
}) 
// copies file 
fs.copy('./programm/json/', './Schedule/json/',function (err) {
  if (err) return console.error(err)
  console.log("success!")
}) //

fs.copy('./programm/speakers/', './Schedule/img/',function (err) {
  if (err) return console.error(err)
  console.log("success!")
}) //

 fs.copy('./css/schedule.css', './Schedule/css/schedule.css',function (err) {
  if (err) return console.error(err)
  console.log("success!")
}) // copies file 
 
 fs.copy('./css/bootstrap.min.css', './Schedule/css/bootstrap.min.css',function (err) {
  if (err) return console.error(err)
  console.log("success!")
}) // copies file 

fs.copy('./programm/index.html', './Schedule/index.html',function (err) {
  if (err) return console.error(err)
  console.log("success!")
}) // copies file 
 