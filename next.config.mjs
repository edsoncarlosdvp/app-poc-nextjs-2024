/** @type {import('next').NextConfig} */

export const nextConfig = {
  sassOptions: {
    includePaths: ['styles'],
  },
  images: {
    remotePatterns: [
      {
        protocol: ['https', 'http'],
        hostname: [
          'books.google.com', 
          'books.google.com.br', 
          'googleapis.com',
        ],
        port: '',
        pathname: [
          '/*',
          '/**',
          '/books.google.com/books/content',
          '/books.google.com/books/v1/volumes',
          '/books/content',
          '/books/v1/volumes'
        ],
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
