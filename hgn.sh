#!/bin/bash


warn(){
   echo -e "\033[33m ----- $1 ----- \033[0m"
}

err(){
    echo -e "\033[43;41m $1 \033[0m" 
}

current_branch=`git symbolic-ref --short -q HEAD`
target=develop
if   [ $current_branch = "develop" ]  || [ $current_branch = 'beta' ] 
then
  err '当前分支为'$current_branch
  err '请检查当前分支后再做合并'
  exit
fi
echo -e "当前分支 \033[33m ${current_branch} \033[0m --> \033[33m ${target} \033[0m"

if  [ -z "$1" ] 
then
read -p "请输入本次提交的注释：" commitMsg
if  [ -z "$commitMsg" ]
then
echo "无注释无法提交，退出本次合并过程"
exit
else
commitMsg=$commitMsg
echo $commitMsg
fi
else
commitMsg=$1
fi
warn "current_branch pull"
git pull
if [ $? -ne 0 ]  
then
err '合并过程出现出现异常 程序退出'
  exit
fi
warn "current_branch add ."
git add .
warn "current_branch commit "
git commit -m "'$commitMsg'"
if [ $? -ne 0 ]  
then
err '合并过程出现出现异常 程序退出'
  exit
fi
warn "current_branch push"
git push
if [ $? -ne 0 ]  
then
err '合并过程出现出现异常 程序退出'
  exit
fi
warn "checkout develop"
git checkout develop
if [ $? -ne 0 ]  
then
err '合并过程出现出现异常 程序退出'
  exit
fi
warn "develop pull"
git pull
if [ $? -ne 0 ]  
then
err '合并过程出现出现异常 程序退出'
  exit
fi
git merge $current_branch -m 合并分支
if [ $? -ne 0 ]  
then
err '合并过程出现出现异常 程序退出'
  exit
fi

warn "goback current_branch"
git checkout $current_branch

echo -e "add"

exit

