const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const slugify = require('slugify');

module.exports = function (eleventyConfig) {
    // eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addWatchTarget('./src/sass/');

    // eleventyConfig.addPassthroughCopy('./src/css');

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addPairedShortcode('intro', function (content) {
        return `<section class="col-md-3 intro">${content}</section>`;
    });

    eleventyConfig.addPairedShortcode('instruktioner', function (content) {
        return `<section class="col-md-6 my-4 my-md-0 instructions">${content}</section>`;
    });

    eleventyConfig.addPairedShortcode('uppgifter', function (content) {
        return `<section class="col-md-3 assignments">${content}</section>`;
    });

    eleventyConfig.addFilter('splice', (path) => {
        return path.split('/').slice(0, -1).join('/');
    });

    eleventyConfig.addFilter('capitalize ', (str) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    });

    eleventyConfig.addFilter('slugUrl', (str) => {
        return slugify(str, {
            lower: true,
            strict: false,
            remove: /["]/g,
          });
    });

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true
    })
    .use(markdownItAnchor, {
        permalink: true,
        permalinkClass: 'anchor',
        permalinkSymbol: '#',
        permalinkSpace: false,
        permalinkBefore: true,
        level: [1, 2, 3],
        slugify: (s) =>
            s
                .trim()
                .toLowerCase()
                .replace(/[\s+~\/]/g, '-')
                .replace(/[().`,%·'"!?¿:@*]/g, '')
    });
    eleventyConfig.setLibrary('md', markdownLibrary);

    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    };
};
