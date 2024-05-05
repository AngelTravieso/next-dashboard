/** @type {import('next').NextConfig} */
const nextConfig = {
    // Aquí se indican las imágenes a usar con la etiqueta < Image />
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            },
        ]
    }
};

export default nextConfig;
