```bash
npx create-next-app@latest .
```

node_modules 폴더 삭제

```bash
yarn set version berry
```

파일 `.yarnrc.yml`
`nodeLinker: pnp` 추가

```yml
yarnPath: .yarn/releases/yarn-4.1.1.cjs
nodeLinker: pnp
```

```bash
yarn install
```

```bash
yarn dlx @yarnpkg/sdks vscode
```

파일 `.gitignore` 에 추가

```
# yarn
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

```bash
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```

파일 `.eslintrc.json`

```json
{
  "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": { "prettier/pretttier": "error" }
}
```

파일 `.prettierrc`

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "always"
}
```

```bash
yarn dlx @yarnpkg/sdks vscode
```
