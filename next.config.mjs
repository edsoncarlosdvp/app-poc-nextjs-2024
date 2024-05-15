/** @type {import('next').NextConfig} */

export const nextConfig = {
  sassOptions: {
    includePaths: ['styles'],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
