#usr bin/env sh

mkdir -p .github/actions/checkout
cd .github/actions/checkout
git init
git remote add origin https://github.com/actions/checkout.git
git fetch origin v4 --depth=1
git checkout FETCH_HEAD