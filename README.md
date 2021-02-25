# [itstrudi.com](www.itstrudi.com) 

Source code of the ItsTrudi soap website. Build with Tailwindcss and Jekyll. Hosted on Github Pages.
The favicons were generated using `https://realfavicongenerator.net/`.

# Setup

All `podman` comands can be replaced with `docker` (no need for `sudo` in this case)/

Build the node container with tailwindcss:

```bash
sudo podman build . -t tailwindcss
```

Initialize tailwindcss to create the `tailwindcss.config.js` file (already done for this repository):

```bash
sudo podman run -it -v "$PWD":/tmp/site localhost/tailwindcss npx tailwindcss init
```

Build the tailwindcss files:

```bash
sudo podman run -it -v "$PWD":/tmp/site localhost/tailwindcss npx tailwindcss build styles.css -o ./assets/output.css
```

When testing changes, be sure to set `purge: enabled: false` in `tailwindcss.config.js` to build all the styles.

You can serve/preview the site locally by running:

```bash
sudo podman run -it --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages
```

The site is then accessible at `localhost:4000`.
