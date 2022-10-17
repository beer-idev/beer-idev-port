/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
},
module.exports = {
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: '',
    // domains: [
    //   'picsum.photos',
    //   'flowbite.com',
    //   'localhost',
    //   'cdn.jsdelivr.net',
    //   'beer-idev-port.vercel.app'
    // ],
  },
}

// module.exports = nextConfig, configImage
