
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
//const withAssetsImport = require('next-assets-import')
const withVideos = require('next-videos')
module.exports = withVideos(withImages(withCSS()))
