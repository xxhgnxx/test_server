#!/bin/bash

warn(){
   echo -e "\033[33m $1 \033[0m"
}

err(){
    echo -e "\033[43;41m $1 \033[0m" 
}

current_branch=`git symbolic-ref --short -q HEAD`
target=develop
if   [ $current_branch = 'develop' || $current_branch = 'beta'] 
then
  err '当前分支为'$target
  err '请检查当前分支后再做合并'
  exit
fi

echo -e "当前分支 \033[33m ${current_branch} \033[0m --> \033[33m ${target} \033[0m"
echo -e "add"

exit

