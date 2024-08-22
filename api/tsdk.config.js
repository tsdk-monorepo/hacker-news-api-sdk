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
    axios: "^1.7.2",
    xior: "^0.5.5",
    zod: "^3.23.8",
  },
};
