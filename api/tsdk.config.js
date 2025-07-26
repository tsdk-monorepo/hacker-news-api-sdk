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
  dataHookLib: ['SWR', 'ReactQuery', 'VueQuery', 'SolidQuery', 'SvelteQuery'],
  dependencies: {
    axios: "^1.8.4",
    xior: "^0.7.8",
    zod: "^3.25.67",
  },
  scripts: {
    "tsc:build": "tsc --project tsconfig.json",
  }
};
