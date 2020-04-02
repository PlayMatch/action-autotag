import Regex from './regex.js'
import path from 'path'
import fs from 'fs'

export default class Dockerfile extends Regex {
  constructor (root = null) {
    root = path.join(process.env.GITHUB_WORKSPACE, root)
    core.debug(fs.readdirSync(root))
    if (fs.statSync(root).isDirectory()) {
      root = path.join(root, 'Dockerfile')
    }

    super(root, /LABEL[\s\t]+version=[\t\s+]?[\"\']?([0-9\.]+)[\"\']?/i)
  }
}
