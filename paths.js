const path = require('path');
const fs = require('fs');
const root = process.cwd();
const src = path.resolve(root, 'src');
const dist = path.resolve(root, 'dist');
const localPath = path.resolve(__dirname, '.config.json');
const indexHTML = path.resolve(root, 'index.html');
let isTypeScript, isJavaScript, entryIndex;

function exportPath() {
  let config = {};

  if (fs.existsSync(localPath)) {
    config = require(localPath);
  }
  isTypeScript = config.type === 'typescript';
  isJavaScript = config.type === 'javascript';
  entryIndex = isTypeScript ? path.join(src, 'index.tsx') : path.join(src, 'index.js')
}

exportPath()

module.exports = {
  dist,
  root,
  indexHTML,
  localPath,
  entryIndex,
  isTypeScript,
  isJavaScript,
  src,
}