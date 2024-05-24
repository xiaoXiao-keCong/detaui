#usr bin/env sh

mkdir -p .github/actions/deploy-pages
cd .github/actions/deploy-pages
git init
git remote add origin https://github.com/actions/deploy-pages.git
git fetch origin v4 --depth=1
git checkout FETCH_HEAD