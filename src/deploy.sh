# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:

  push:
    branches: ['main']


  workflow_dispatch:


permissions:
  contents: read
  pages: write
  id-token: write


concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:

  deploy:
    environment:
      name: github-pages
      url: ${{https://github.com/torco34/react-hook-proyecto}}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2