#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const root = process.cwd();
const needClear = ['tsconfig.json', 'src', 'config.json'];
/**
 * 清除目标目录 ['tsconfig.json', 'src']
 */
function clear() {
  needClear.forEach(item => {
    const file = path.join(root, item);
    if (fs.existsSync(file)) {
      fs.rmSync(file, { recursive: true });
    }
  })
}

clear();
