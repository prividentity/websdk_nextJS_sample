/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@privateid/cryptonets-web-sdk-alpha",
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_API_URL: "https://api.devel.cryptonets.ai/node",
    REACT_APP_API_URL_WASM: "https://api.devel.cryptonets.ai/node",
    REACT_APP_API_KEY: "00000000000000001962",
    REACT_APP_WASM_MODULE: "face_mask"
  }
};

module.exports = withTM(nextConfig);
