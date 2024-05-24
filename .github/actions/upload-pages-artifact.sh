#usr bin/env sh

mkdir -p .github/actions/upload-pages-artifact
cd .github/actions/upload-pages-artifact
git init
git remote add origin https://github.com/actions/upload-pages-artifact.git
git fetch origin v4 --depth=1
git checkout FETCH_HEAD