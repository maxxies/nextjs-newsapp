/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["localhost","yourDomain.com"],
    formats:["image/webp"],
  },
}

module.exports = nextConfig
