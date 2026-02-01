# Personal Blog

Code for majauhar.github.io

## Technology

- HTML, CSS, SCSS, JavaScript
- [RSS](https://en.wikipedia.org/wiki/RSS)
- [Jekyll on GitHub Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
- [Giscus](https://giscus.app/) for comments
- [MathJax](https://www.mathjax.org/) for mathematical notation
- [Kramdown](https://kramdown.gettalent.com/) for Markdown processing
- [OpenHeart](https://github.com/dddddddddzzzz/OpenHeart), [`<open-heart>`](https://github.com/dddddddddzzzz/open-heart-element) for like buttons
- Three-column Distill.pub-style layout with interactive table of contents and contextual footnotes

## Development

### Using Docker (Recommended)

Requires Docker and Docker Compose.

```bash
# Start the development server
docker-compose up

# Or build and start
docker-compose up --build

# Stop the server
docker-compose down
```

The site will be available at `http://localhost:4000` with live reloading enabled.

### Using Ruby Environment

Requires a Ruby environment.

```bash
$ ./start
```

## License

The following directories and their contents are Copyright Mohammad A. Jauhar. You may not reuse anything therein without my permission:

```
_data/
_posts/
images/
```

All other directories and files are MIT Licensed (where applicable).

## This website builds on the template of muan.co
