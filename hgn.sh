#!/bin/bash
current_branch=`git symbolic-ref --short -q HEAD`

echo "$current_branch"