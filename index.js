const loadSettings = require('./settings/load')
const loadSecrets = require('./secrets/load')

module.exports = {
  settings: {load: loadSettings},
  secrets: {load: loadSecrets},
}
