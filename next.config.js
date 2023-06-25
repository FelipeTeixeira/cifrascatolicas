/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cifrascatolicas.com.br',
                port: '',
                pathname: '/imagens/**',
            },
        ],
    },
}

module.exports = nextConfig
