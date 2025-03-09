
# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap 
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I wanted to practice coding with Bootstrap and the ability to use NPM for building and previewing the project while I make changes.

I also practice with accessibility adding accessibility features.

```html
<a href="#main-content" class="skip-to-content visually-hidden">Skip to main content</a>
  <main id="main-content" class="container py-5">
    <article class="blog-card mx-auto" aria-labelledby="article-title">
      <h2 class="visually-hidden">Blog Preview Card</h2>
      <img src="./assets/images/illustration-article.svg" alt="Article illustration" class="card-image p-3">
      <div class="card-body">
        <span class="tag">Learning</span>
        <p class="text-gray small">Published 21 Dec 2023</p>
        
        <h2 id="article-title" class="card-title"><a href="#" class="article-link">HTML & CSS foundations</a></h2>
        
        <p class="card-description">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
        
        <div class="author">
          <img src="./assets/images/image-avatar.webp" alt="Greg Hooper" class="author-avatar">
          <span class="author-name">Greg Hooper</span>
        </div>
      </div>
    </article>
  </main>
  
  <footer class="text-center py-3" role="contentinfo">
    <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener">Frontend Mentor</a>. 
    Coded by <a href="matthummel.com" aria-label="Developer's portfolio">Matt Hummel</a>.
    </div>
  </footer>
```
```css
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

Big props to [The Markdown Guide](https://www.markdownguide.org/) for helping me with markdown.

### Useful resources

- [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - This helped me find out what bootstrap css classes I needed to use. It showed me how to install bootstrap into the project.
- [W3C](https://www.w3.org/WAI/fundamentals/accessibility-intro/) - A web accessibility reference.

## Author

- Website - [Matt Hummel](https://www.matthummel.com)
- Frontend Mentor - [@matthummel-pa](https://www.frontendmentor.io/profile/matthummel-pa)
- BlueSky - [@matthummel.bsky.social](https://bsky.app/profile/matthummel.bsky.social)
- LinkedIn - [@matt-hummel-pa](https://www.linkedin.com/in/matt-hummel-pa/)