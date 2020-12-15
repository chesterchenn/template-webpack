#!/usr/bin/env bash 

# 清除 src, tsconfig.json
# rootDir="$PWD"
need_clear=("src" "tsconfig.json")

for loop in "${need_clear[@]}"
do
  rm -rf $loop
done
