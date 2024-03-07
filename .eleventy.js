const { DateTime } = require("luxon")
module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/style.css')
  eleventyConfig.addPassthroughCopy('src/blog-style.css')
  eleventyConfig.addPassthroughCopy('src/contact.css')
  eleventyConfig.addPassthroughCopy('src/participe.css')
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/admin')

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  })


  

  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",

    // Default Browsersync options shown:
    port: 8080,
    open: false,
    notify: false,
    ui: false,
    ghostMode: false,
  })

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};