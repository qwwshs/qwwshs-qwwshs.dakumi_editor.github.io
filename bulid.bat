@echo off

git add -A
git commit -m "deploy"
git push -f git@github.com:qwwshs\qwwshs-qwwshs.dakumi_editor.github.io.git master:main
cd -