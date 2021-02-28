module.exports = eleventyConfig => {
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: "_includes",
            layouts: "_layouts"
        }
    }
}
