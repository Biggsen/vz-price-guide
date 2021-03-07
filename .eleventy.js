module.exports = eleventyConfig => {

    // Include our static assets
    eleventyConfig.addPassthroughCopy("css")

    eleventyConfig.setUseGitIgnore(false);

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'dist',
            includes: "_includes",
            layouts: "_layouts"
        }
    }
}
