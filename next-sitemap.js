/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.andrewross.tech",
  changefreq: "daily",
  priority: 0.9,
  sitemapSize: 7000,
  exclude: ["/_*", "/api"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_*", "/api"]
      }
    ]
  }
};



