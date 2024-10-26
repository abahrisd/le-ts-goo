/*
* tsc app.ts - compile specific file
*
* tsc couldn't run without tsconfig.json
*
* in tsconfig we can set of files to be transpiled, like
*   files: [
*       "app.ts",
*       ...
*   ],
*   // can use pattern of files with include
*   include: [
*       "app*",
*       "/my_folder/app*",
*       ...
*   ],
*   // can set patterns to exclude from compilation
*   exclude: [
*   ],
*   //can set path to tsconfig which would be extended, usable in monoreps
*   extends: "./base_tsconfig.json",
*
*   //we can allow js files to be part of our application with
*   allowJS
*
*   When we compile we can set
*   outDir: "./build/" - specific place for compiled files
*   outFile: "build.js" - file to bundle all outputs of js
*   noEmit: true - don't emit files on compilation
*   noEmitOnError: true - don;t emit if error accused
*
*
* */