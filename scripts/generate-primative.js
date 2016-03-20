const copy = require('copy-template-dir')
const path = require('path')
const fs = require('fs');
const tagList = require('../src/tagList')
const primativeDir = path.join(__dirname, `../src/primatives`)

/* if directory exists delete it first */
if (fs.existsSync(primativeDir)) {
  console.log('directory exists delete')
  deleteFolderRecursive(primativeDir)
}

for (var i = 0; i < tagList.length; i++) {
  makePrimativeComponent(capitalize(tagList[i]))
}

function makePrimativeComponent(name){

  const vars = { name: name }
  const inDir = path.join(__dirname, `../src/templates/primativeComponent`)
  const outDir = path.join(__dirname, `../src/primatives/${name}`)

  copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err
    createdFiles.forEach(filePath => {
      console.log(`Created ${filePath}`)
      var newName = filePath.replace('ComponentName', name)
      fs.rename(`${filePath}`, newName, function(err) {
          if ( err ) console.log('ERROR: ' + err);
          console.log(`Created ${newName}`)
      });
    })
  })
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function deleteFolderRecursive (folderPath) {
  if( fs.existsSync(folderPath) ) {
    fs.readdirSync(folderPath).forEach(function(file,index){
      var curPath = folderPath + "/" + file
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    });
    fs.rmdirSync(folderPath)
  }
}
