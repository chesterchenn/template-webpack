#!/usr/bin/env bash 

# 初始化typescript
rootDir="$PWD"
dir="${PWD}/plugin/typescript"

cp ${dir}/tsconfig.json ${PWD}
cp -r ${dir}/src ${PWD}
