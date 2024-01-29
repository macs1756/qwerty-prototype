/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    TOKEN: process.env.TOKEN,
    DOMAIN: process.env.DOMAIN
}
};

export default nextConfig;
