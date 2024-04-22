# Headless WordPress Site for ProgressionStudios.com

This is a Headless WordPress site powered by [Next.js](https://nextjs.org/). Content and media are fetched from a WordPress installation using WPGraphQL. Using a headless setup enhanced my ability to manage accessibility and improve page loading speeds.

[View Website - ProgressionStudios.com](https://progressionstudios.com/)

## Tools Used
- [WordPress](https://wordpress.org)
- [Next.js](https://nextjs.org)
- [wpGraphQL](https://www.wpgraphql.com/)
- [Yoast SEO](https://wordpress.org/plugins/wordpress-seo/)
- [Contact Form 7](https://wordpress.org/plugins/contact-form-7/)

## Google PageSpeed Insights
![Desktop Page Scores](https://progressionstudios.com/headless/wp-content/uploads/2024/04/performance-screeneshot.jpg)

[Mobile Scores](https://progressionstudios.com/headless/wp-content/uploads/2024/04/mobile.pdf) | [Desktop Scores](https://progressionstudios.com/headless/wp-content/uploads/2024/04/desktop.pdf)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.