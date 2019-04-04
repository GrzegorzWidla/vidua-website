# VIDUA Brand Website

VIDUA is a personal brand of Grzegorz Widła.

[![Netlify Status](https://api.netlify.com/api/v1/badges/426b9ed8-2c21-4209-8f87-15f72e50ecb6/deploy-status)](https://app.netlify.com/sites/vidua/deploys)

## 💡 Technology Choices

Due to the nature of the website (portfolio, blog) and technical know-how of the content author, decision has been made to keep the website static and content fully file driven (Markdown, YAML, static files all stored in this git repo).

1. **Netlify**. Continiously deploying workflow for static websites, used as a cheap, quality hosting. In the long term might have to switch to AWS S3 or Azure Storage services.
2. **GatsbyJS**. ReactJS and GraphQL driven static site generator. Familiarity with React, preference of JSX for templating and availability of powerful animation libraries has made the choice obvious.
3. **Styled Components**. CSS-in-JS library which turns every style into an extendable React component. Allows easy extending of styles, creating variants, derivations and containing styles within component definition.
4. **Polished**. A lightweight toolset to aid writing CSS-in-JS. Works perfectly with `styled-components`. Here used mainly for color manipulation and to speed up some repeatable CSS patterns.
5. **React Spring**. Perfomant, physics based animations library for React. Spring animations feel much more natural compared to eased transitions and keyframes.
6. **React Helmet**. `helmet` is a widely used Express.js library for defining HTTP headers. `react-helmet` fullfils a similar role on the front-end of defining HTML head tags and attributes.
7. **TypeScript**. Type safety for GraphQL queries and components props.

## 🏆 Long Term Goals

1. Responsive website that represents its author professionally; acts as a portfolio and a blog to share experiences and thoughts regarding software design and development.
2. Perfect, 100% performance and accessibility results from Google's Lighthouse test.
3. Complete accessibility for users who are colorblind, legally blind or use screen reader for any other reason.
4. Offline, cached access, service worker, ability to install as app. Website should be a full PWA.

## 🚀 Getting Started

Feel free to clone or fork this repository. Use it to learn static websites development, for inspiration or anything else you'd like. If you find a bug please report an issue or offer a pull request.

1.  Clone the repository.

    `git clone git@github.com:GrzegorzWidla/vidua-website.git directory`

2.  Install dependencies.

    `npm install`
    
3.  Run the site locally.

    `npm start`

4.  Open the website in web browser of your choice.

    `http://localhost:8000`
    
    Data can be explored using Graph*i*QL - IDE for constructing GQL queries.
    
    `http://localhost:8000/___graphql`

## 🧾 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
