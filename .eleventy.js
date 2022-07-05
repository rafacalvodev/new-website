const rssPlugin = require('@11ty/eleventy-plugin-rss');
const { DateTime } = require('luxon');

// Filters
// const dateFilter = require('./src/filters/date-filter.js');
// const w3DateFilter = require('./src/filters/w3-date-filter.js');

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = function (eleventyConfig) {
  // Add filters
  // eleventyConfig.addFilter('dateFilter', dateFilter);
  // eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

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

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });




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
