/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	// needed for adding custom images from 3rd party sources
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/cedaring-xr/blog-content-templates/main/images/**'
			}
		]
	}
}

module.exports = nextConfig
