\# GitHub Pages — Smoke Test





This repo is a minimal static site to verify GitHub Pages is configured correctly.





\## Deploy

1\. Commit these files to the repo root (not in a subfolder).

2\. Go to \*\*Settings → Pages\*\*.

3\. Under \*\*Build and deployment\*\*, choose \*\*Deploy from branch\*\*.

4\. Select \*\*Branch: `main`\*\* and \*\*Folder: `/ (root)`\*\*, then \*\*Save\*\*.

5\. Wait for the Pages build to complete (Actions tab), then visit the provided URL.





\## What to verify

\- `index.html` loads with styled cards (CSS working).

\- The "Click me" button shows an alert (JS working).

\- `about.html` navigates correctly.

\- Visiting a bad URL (e.g., `/nope`) shows the custom `404.html`.

