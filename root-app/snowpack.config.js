/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    "@demo/mfe": "http://localhost:8001/index.js",
  },
  routes: [
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  devOptions: {
    port: 8000,
  },
};
