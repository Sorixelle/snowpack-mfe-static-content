/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
  },
  devOptions: {
    port: 8001,
    open: 'none',
  },
  packageOptions: {
    rollup: {
      plugins: [ require('rollup-plugin-pnp-resolve')() ],
    },
  },
};
