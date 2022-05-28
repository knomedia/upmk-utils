const YAML = require('yaml')
const fse = require('fs-extra')

const SETTINGS_PATH = "upmk.yml"

let data;

function loadSettings() {
  if (!data) {
    let contents = fse.readFileSync(SETTINGS_PATH, 'utf8')
    data = YAML.parse(contents)
  }
  return data
}

module.exports = loadSettings
