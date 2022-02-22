module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cifrascatolicas.com.br/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
