/** @type {import('tsdk').TSDKConfig} */
module.exports = {
  packageDir: "../",
  packageName: "hn-api-sdk",
  baseDir: "./src",
  entityLibName: ["typeorm"],
  entityExt: "entity",
  apiconfExt: "apiconf",
  shareExt: "shared",
  sharedDirs: ["./src/shared"],
  removeFields: [],
  httpLib: "xior",
  monorepoRoot: "../",
  dataHookLib: "SWR",
  dependencies: {
    axios: "^1.7.9",
    xior: "^0.6.3",
    zod: "^3.24.2",
  },
  scripts: {
    "tsc:build": "rm -rf node_modules && tsc --project tsconfig.json",
  }
};
