# Jefferson Rodríguez Nájera — Portfolio

A personal research & policy portfolio built with [Astro](https://astro.build).
Static site, fast, easy to edit. No database, no backend.

## Run it locally

You need **Node.js 22+** installed (https://nodejs.org).

```bash
npm install      # first time only — installs dependencies
npm run dev      # start local dev server at http://localhost:4321
```

Open the URL it prints. The site reloads automatically as you edit.

To build the final static site (for deploying):

```bash
npm run build    # output goes to /dist
npm run preview  # preview the built site
```

## How to edit content (no coding needed)

### Your name, bio, links, highlights, publications
Edit **`src/data/site.ts`**. Everything site-wide lives here:
- name, tagline, email, LinkedIn, CV path
- the "About / My story" paragraphs
- the highlights strip
- the publications list
- the three category descriptions

### Projects
Each project is one Markdown file in **`src/content/projects/`**
(r1–r7 = research, p1–p6 = policy, i1–i4 = innovation).

To edit a project, open its `.md` file. The top part (between `---`) is the
data; the bottom part is the description. To add a new project, copy an
existing file, rename it, and change the fields.

Fields:
- `category`: research | policy | innovation
- `order`: lower number shows first within its category
- `featured`: true → shows on the home page
- `methods`: list of tags
- `cover`: optional image (see below)
- `links`: optional external links, e.g.
  `links: [{ label: "Read paper", url: "https://..." }]`

### Images & diagrams
- **Profile photo:** drop a file at `public/images/profile.jpg`
- **Project covers/diagrams:** drop files in `public/images/projects/`,
  then in the project's `.md` set e.g. `cover: "/images/projects/r1.jpg"`
- **CV PDF:** drop your CV at `public/cv/Jefferson_Rodriguez_CV.pdf`

### Switch the color theme
In `src/layouts/BaseLayout.astro`, find `<html lang="en" data-theme="navy">`
and change `navy` to `ink` or `sand`. Three palettes are built in.

## Deploy (when ready)
The simplest free options:
- **Netlify:** drag the `dist/` folder onto https://app.netlify.com/drop
- **GitHub Pages / Vercel / Cloudflare Pages:** push this folder to a repo
  and connect it. Build command: `npm run build`, output dir: `dist`.

A custom domain can be added later in your host's settings.
