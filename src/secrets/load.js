const YAML = require('yaml')
const fse = require('fs-extra')

const KEY = "secrets.key"
const GPG_FILE = "secrets.yml.gpg"
const OUTPUT_FILE = "secrets.yml"


async function decrypt(tb) {
  if (fse.existsSync(OUTPUT_FILE)) {
    tb.print.info(`${ OUTPUT_FILE } already exists, skipping decrypt, remove it and run again if this is not expected`)
  } else {
    if (fse.existsSync(GPG_FILE) && fse.existsSync(KEY)) {
      tb.print.info(`decrypting ${ GPG_FILE } using ${ KEY }`)
      let cmd = `gpg --batch --yes --passphrase-file ${ KEY } -d ${ GPG_FILE } > ${ OUTPUT_FILE }`
      await tb.system.run(cmd)
    } else {
      tb.print.info(`${ GPG_FILE } or ${ KEY } not found, skipping secrets decryption`)
    }
  }
}

function loadYaml() {
  let data = {}
  if (fse.existsSync(OUTPUT_FILE)) {
    let contents = fse.readFileSync(OUTPUT_FILE, 'utf8')
    data = YAML.parse(contents)
  }
  return data
}

async function load(tb, env) {
  await decrypt(tb)
  let secrets = loadYaml()
  return secrets[env] || {}
}

module.exports = load;
