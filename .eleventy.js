const rssPlugin = require('@11ty/eleventy-plugin-rss');
const { DateTime } = require('luxon');

// Filters
// const dateFilter = require('../src/filters/date-filter.js');
// const w3DateFilter = require('../src/filters/w3-date-filter.js');

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');


module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy('./src/img/');
  eleventyConfig.addPassthroughCopy('./src/fonts/');

  // Returns work items, sorted by display order
  eleventyConfig.addCollection('projects', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
  });

  // Returns work items, sorted by display order then filtered by featured
  eleventyConfig.addCollection('featuredWork', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(
      x => x.data.featured
    );
  });

  // Returns work items, sorted by display order then filtered by featured
  eleventyConfig.addCollection('recentBlog', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/blog/*.md')).filter(
      x => x.data.recent
    );
  });

  // Limit amount of posts displayed
  eleventyConfig.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
  });

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/blog/*.md')].reverse();
  });

  // Date filters
  eleventyConfig.addFilter('longDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('LLLL dd, yyyy');
  });

  eleventyConfig.addFilter('isoDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter('w3Date', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO();
  });

  // Add filters
  // eleventyConfig.addFilter('dateFilter', dateFilter);
  // eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);




  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: "src",
      output: "public",
    },
  };
};
