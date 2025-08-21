import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                port: "",
                pathname: "/t/p/**",
            },
            {
                protocol: "https",
                hostname: "www.themoviedb.org",
                port: "",
                pathname: "/t/p/**",
            },
            {
                protocol: "https",
                hostname: "img.youtube.com",
                port: "",
                pathname: "/vi/**",
            },
            {
                protocol: "https",
                hostname: "i.ytimg.com",
                port: "",
                pathname: "/vi/**",
            },
            {
                protocol: "https",
                hostname: "chadridings.github.io",
                port: "",
                pathname: "/**",
            }
        ],
    },
};

export default nextConfig;
