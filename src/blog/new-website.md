---
title: "And now, a new website"
pageTitle: "New website |"
summary: "Well, after some time it's here! Let me tell you about it as best as I can."
pageHeaderSummary: "Well, after some time it's here! Let me tell you about it as best as I can."
date: "2022-09-05"
tags: ['Eleventy', 'HTML', 'CSS']
---

## Motivation.

This new site has been in my head since last year, mostly because I wasn't satisfied with my [previous site](https://rafaelcalvo.netlify.app/es-es/), but for personal reasons I couldn't get to it until the end of january of this year. But in the meantime I did some research for inspiration and design tips. Then, when I finally got the time, I began the design phase.

## Design.

Ohhh boy, this is the part that changed the most in the whole process, even in the development process I was making changes of the design. 

First of all, I made around five home sections with different color palettes and some text I copied from other websites:

<div class="grid new-website-grid">
  <img class="radius" src="/img/blog/new-website/first-model.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="radius" src="/img/blog/new-website/second-model.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="radius" src="/img/blog/new-website/third-model.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="radius" src="/img/blog/new-website/fourth-model.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="radius" src="/img/blog/new-website/fifth-model.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="radius" src="/img/blog/new-website/sixth-model.png" alt="{{ item.data.hero.imageAlt }}"/>
</div>

Then, I asked for some feedback from friends and family and ended up with one palette:

<div class="grid final-design-grid">
  <img class="new-website-final-design" src="/img/blog/new-website/final-design.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="new-website-final-design" src="/img/blog/new-website/final-design.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="new-website-final-design" src="/img/blog/new-website/final-design.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="new-website-final-design" src="/img/blog/new-website/final-design.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="new-website-final-design" src="/img/blog/new-website/final-design.png" alt="{{ item.data.hero.imageAlt }}"/>
  <img class="new-website-final-design" src="/img/blog/new-website/final-design.png" alt="{{ item.data.hero.imageAlt }}"/>
</div>


I let this "final" design rest while I kept organizing my ideas and looking for more references and inspiration. Which leads us to the next part:

## Development.

This is the part that was clearest to me: [Eleventy](https://www.11ty.dev/) and CSS (well Sass), and no CSS or JS framework. Why? Because I want to have complete freedom when it comes to building and styling the website, I also wanted the website to load faster and have less weight.

I could manage to build something with Eleventy on my own, but I lacked order and cleanliness in the code. That's when I finally read thoroughly [Andy Bell's](https://twitter.com/hankchizljaw) course [Learn Eleventy From Scratch](https://learneleventyfromscratch.com/) which I've skimmed through from time to time without paying full atention to it, until I've decided to build this website. This course fell like a glove for me, it's well written and it's easy to follow and understand. Also it made it easier to understand Eleventy's [Docs](https://www.11ty.dev/docs/). 

So that's the skeleton's build decided. Now comes the styling.

Here I wanted to go with [Sass](https://sass-lang.com/), and after seeing a lot of videos of [Kevin Powell](https://www.youtube.com/kepowob), [Gary Simon](https://www.youtube.com/c/DesignCourse), among others; and having read various articles and Twitter threads from [Andy Bell](https://piccalil.li/), [Sara Soueidan](https://twitter.com/SaraSoueidan), [Lupita Code](https://twitter.com/lupitacode), and other good front-end developers, I became more motivated to style the site "by hand", so to speak.

Now, since I'm quite lazy, I picked up [Stephanie Eckles'](https://twitter.com/5t3ph/) Eleventy [template](https://github.com/5t3ph/11ty-sass-skeleton) to start working with Sass, did some small tweaks and I was good to go.

I'm still figuring out mixins and functions in Sass, so for now I'm sticking with what drew me to Sass: Nesting and the `@forward` and `@use` rules.

Now, it's in this stage when I began to drift (hard) to the current design and was doing changes on the fly, even the fonts and colors changed. Why? Because I found some fonts and colors that I liked more and, in the layout aspect, I wanted to build something fast, without many issues and ready to deploy.

Annother thing I wanted to address while building this website is going for an accessible site. There I also read articles and threads from various developers (those beign Sara Soueidan, Stephanie Eckles and [Smashing  Magazine](https://www.smashingmagazine.com/), [The A11y Project](https://www.a11yproject.com/), among others) that are knowledgable in the topic and took notes on what to do and not do. 


## What I learned.

In addition to what I learned in the Learn Eleventy from Scratch course, here is a small list of what I learned while putting together this site:
- Making clickable cards with CSS.
- Better use of CSS custom properties.
- Reducing the use of JavaScript to almost 0.
- Better understanding of the fundamentals and principles that come with Web Accessibility.


## What's next?
Well, there's quite some things I have in a to-do list about the next steps in the progress of this website:
- Changes to the layout and part of the content to be as close as possible to the final design.
- Improve accessibility.
- Dark mode for the `prefers-color-scheme: dark`.
- Better image optimization.
- Clean the CSS/Sass.
