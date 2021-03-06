module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/components/common',
        network: '@/network',
        components: '@/components',
        views: '@/views',
      },
    },
  },
};
// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias
//       .set("assets", resolve("src/assets"))
//       .set("components", resolve("src/components"))
//       .set("views", resolve("src/views"))
//       .set("network", resolve("src/network"))
//       .set("common", resolve("src/common"));
//   }
// };
