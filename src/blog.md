---
title: 'Some things I write'
pageTitle: "Articles and thoughts by"
pageHeaderSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat egestas lorem, eget fringilla ligula malesuada sed. Nunc vulputate arcu. '
layout: 'layouts/feed.njk'
pagination:
  data: collections.blog
  size: 6
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

The latest articles from around the studio, demonstrating our design
thinking, strategy and expertise.