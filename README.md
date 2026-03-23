# Korean Flashcards

## Deploy to GitHub Pages (GitHub Actions)

This repo includes a workflow at `.github/workflows/deploy.yml` that builds and deploys `dist` to GitHub Pages.

1. Push this project to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. (Optional, if your app needs Gemini access) add a repository secret named `GEMINI_API_KEY` in **Settings > Secrets and variables > Actions**.
5. Push to `main` (or `master`) to trigger deployment.

### Notes

- The Vite base path is set automatically during GitHub Actions builds using your repository name.
- You can override the base path at build time with `VITE_BASE_PATH` if needed.
- This is a client-side app. Any API key available in browser code can be inspected by users.
