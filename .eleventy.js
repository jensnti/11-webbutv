const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const slugify = require('slugify');

module.exports = function (eleventyConfig) {
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addPassthroughCopy("./src/css");

    eleventyConfig.addFilter('slug', (str) => {
        return slugify(string, {
            lower: true,
            strict: true,
            replacement: "-",
            remove: /[*+~·,()'"`´%!?¿:@\/]/g,
          });
    });

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true
    }).use(markdownItAnchor, {
        permalink: true,
        permalinkClass: 'tdbc-anchor',
        permalinkSymbol: '#',
        permalinkSpace: false,
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
