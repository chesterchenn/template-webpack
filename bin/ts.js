#!/usr/bin/env node
'use strict';

const path = require('path');
const fs = require('fs');

const root = process.cwd();
const pluginDir = path.join(root, 'plugin', 'typescript');

_clear();
_readFile(pluginDir, root);

function _readFile (directory, dest) {
  fs.readdirSync(directory).forEach(file => {
    const stats = fs.lstatSync(path.join(directory, file));
    if (stats.isDirectory()) {
      const subDir = path.join(directory, file);
      const subDest = path.join(root, file);
      fs.mkdirSync(subDest);
      _readFile(subDir, subDest);
    } else {
      const destFile = path.join(dest, file);
      const readFile = fs.readFileSync(`${directory}/${file}`, 'utf-8');
      fs.writeFileSync(
        destFile, readFile
      )
    }
  })
}

function _clear () {
  const needClear = ['tsconfig.json', 'src'];
  needClear.forEach(item => {
    const file = path.join(root, item);
    if (fs.existsSync(file)) {
      fs.rmSync(file, { recursive: true });
    }
  })
}

