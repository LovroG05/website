#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build


# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'govekar.net' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:LovroG05/LovroG05.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -