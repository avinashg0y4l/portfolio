export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://avinashg0y4l.github.io/portfolio/sitemap.xml',
    }
}
