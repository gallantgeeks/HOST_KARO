/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "hostkaro-hosting.app",/*TODO */
			},
		],
	},
};

module.exports = nextConfig;
