#usr bin/env sh

mkdir -p .github/actions/configure-pages
cd .github/actions/configure-pages
git init
git remote add origin https://github.com/actions/configure-pages.git
git fetch origin v4 --depth=1
git checkout FETCH_HEAD