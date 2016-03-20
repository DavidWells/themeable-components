const copy = require('copy-template-dir')
const path = require('path')
const name = 'Table'
const vars = { name: name }
let inDir = path.join(__dirname, `../src/templates/primativeComponent`)
//const inDir = path.join(process.cwd(), 'templates')
//const outDir = path.join(process.cwd(), 'dist')
let outDir = path.join(__dirname, `../src/primative/${name}`)
copy(inDir, outDir, vars, (err, createdFiles) => {
  if (err) throw err
  createdFiles.forEach(filePath => console.log(`Created ${filePath}`))
  console.log('done!')
})
/*
function test (args, name, targetDir, cb) {

    let templateVars = {name, nwbVersion, reactVersion}
    copyTemplateDir(templateDir, targetDir, templateVars, (err, createdFiles) => {
      if (err) return cb(err)
      logCreatedFiles(targetDir, createdFiles)
      console.log('nwb: installing dependencies')
      installReact(targetDir)
      cb()
    })
}*/