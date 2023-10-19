/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    images:{
        domains:["images.unsplash.com", "a.storyblok.com"]
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      }
}

 

module.exports = nextConfig
