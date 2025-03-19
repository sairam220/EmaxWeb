import pkg from 'react-router-sitemap'; // Import everything as 'pkg'
const Sitemap = pkg.default;  // Access the default export for the Sitemap class

import routes from './src/routes';  // Import the route paths from routes.js

function generateSitemap() {
  // Build the sitemap from the route paths
  const sitemap = new Sitemap(routes)
    .build('https://emaxss.vercel.app') // Your production URL
    .save('./public/sitemap.xml'); // Saves the sitemap to the public folder

  return sitemap;
}

generateSitemap();
