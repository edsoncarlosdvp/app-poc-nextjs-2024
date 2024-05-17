/** @type {import('next').NextConfig} */

export const nextConfig = {
  sassOptions: {
    includePaths: ['styles'],
  },
  images: {
    remotePatterns: [
      {
        protocol: ['https', 'http'],
        hostname: ['books.google.com', 'books.google.com.br'],
        port: '',
        pathname: '/**',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
