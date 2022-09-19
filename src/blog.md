---
title: "Blog"
pageHeaderTitle: "Some articles and thoughts"
pageTitle: "Articles and thoughts by"
pageHeaderSummary: "Here I'll be posting articles of a wide variety of topics, from thoughts to long posts and a few tutorials of stuff I've learned and want to share."
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