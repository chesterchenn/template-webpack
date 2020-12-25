#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const root = process.cwd();
const needClear = ['tsconfig.json', 'src', 'config.json'];
/**
 * 清除目标目录
 */
function clear() {
  needClear.forEach(item => {
    const file = path.join(root, item);
    if (fs.existsSync(file)) {
      fs.rmSync(file, { recursive: true });
    }
  })

  fs.writeFileSync(path.join(root, 'config.json'), JSON.stringify({}, null, 2) + os.EOL);
}

clear();
