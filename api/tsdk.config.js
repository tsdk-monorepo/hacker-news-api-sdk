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
  httpLib: 'xior',
  monorepoRoot: "../",
  dataHookLib: "SWR",
  dependencies: {
    axios: "^1.6.7",
    xior: "^0.0.5",
  },
};
