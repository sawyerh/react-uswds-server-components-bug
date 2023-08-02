/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      "./node_modules/@uswds",
      "./node_modules/@uswds/uswds/packages",
    ],
  },
};

module.exports = nextConfig;
