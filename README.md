# expressJSNotes

# Create an Express Typescript Project
## Basic configuration options

* npm init -y ( create package.json file. )
* in package.json set "type": "module",
* npm i express
* npm i -D typescript
* npm i -D @types/express
* npx tsc --init ( creates tsconfig.json )
* create src folder
* in tsconfig.json set "target": "esnext"
* in tcsonfig.json set "module": "esnext",
* in tsconfig.json set "rootDir": "./src"
* in tsconfig.json set "outDir": "./dist"
* in tsconfig.json set "noImplicitAny": true
* in tsconfig.json set "strictNullChecks": true
* in tsconfig.json set "strictFunctionTypes": true
* in package.json add "build": "tsc --build" to scripts to scripts section
* in package.json add "start": "node ./dist/index.js" to scripts section
* npm i -D nodemon
* npm i -D ts-node
* in package.json add "dev": "node --watch --loader ts-node/esm ./src/index.ts" to scripts section
* create file src/index.ts
* import express from express in index.ts and add boiler plate code.

