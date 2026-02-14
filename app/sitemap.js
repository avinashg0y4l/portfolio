export default function sitemap() {
    return [
        {
            url: 'https://avinashg0y4l.github.io/portfolio',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://avinashg0y4l.github.io/portfolio/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
