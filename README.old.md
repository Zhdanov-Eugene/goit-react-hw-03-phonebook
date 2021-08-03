# goit-react-hw-03-phonebook
npx create-react-app . --use-npm

npm install --save husky lint-staged prettier

adds fieles .huskyrc

{ "hooks": { "pre-commit": "lint-staged" } }

adds "homepage": "https://Zhdanov-Eugene.github.io/goit-react-hw-01-feedback",

adds fieles .lintstagedrc { "src//.{json,css,scss,md}": ["prettier --write"], "src//.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] }

npm install --save gh-pages

"predeploy": "npm run build"

"deploy": "gh-pages -d build"

npm install --save-dev prop-types

npm install --save-dev eslint

npx mrm@2 lint-staged

.prettierrc.json { "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi": true, "singleQuote": true, "trailingComma": "all", "bracketSpacing": true, "jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always" }

в настройках искать codeActionsOnSave и вставить "editor.codeActionsOnSave": { "source.fixAll.eslint": true }

npm install node-sass --save

npm install modern-normalize @import 'node_modules/modern-normalize/modern-normalize.css'; или import '../node_modules/modern-normalize/modern-normalize.css'; или import 'modern-normalize/modern-normalize.css'; 0 0 юбь!!!!!!!

git status- какие изменения произошли

npm run start

work

npm run build

npm run deploy

Published :)

git add *

git commit -m "Commit message"

git push origin main

https://create-react-app.dev/docs/deployment/#step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson