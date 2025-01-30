/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config:any) => {
    const fileLoaderRule = config.module.rules?.find(
      (rule:any) =>
        rule.test?.test?.(".svg") &&
        rule.test?.test?.(".jpg") &&
        rule.test?.test?.(".jpeg") &&
        rule.test?.test?.(".png")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.(jpe?g|png|svg)$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        issuer: /\.[jt]sx$/,
        resourceQuery: { not: /url/ },
        use: ["url-loader"],
      }
    );

    fileLoaderRule.exclude = /\.(jpe?g|png|svg)$/;

    return config;
  },
};

module.exports = nextConfig;
