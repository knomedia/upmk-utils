const loadSettings = require('./src/settings/load')
const loadSecrets = require('./src/secrets/load')

module.exports = {
  settings: {load: loadSettings},
  secrets: {load: loadSecrets},
}
