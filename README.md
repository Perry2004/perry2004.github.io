# [perryz.net](https://perryz.net)

A modern personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🌐 Website

Interactive full-page portfolio featuring smooth animations, responsive design, and dynamic content.

**Tech Stack:** React 19 • TypeScript • Vite • Tailwind CSS • Framer Motion • FullPage.js

### Features

- Responsive design with dark/light mode
- Interactive animations and WebGL effects
- Dynamic image carousel from Pexels API
- Timeline view for work experiences
- Full-page scrolling navigation

---

## 🤖 Scripts

Automated Playwright-based scraper that fetches and updates Pexels image links for the portfolio.

**Tech Stack:** Node.js • TypeScript • Playwright • AWS Lambda • S3

## 🚀 Deployment

### Website
- **Hosting:** AWS S3
- **CDN:** AWS CloudFront

### Scripts
- **Function:** AWS Lambda
- **Scheduler:** AWS EventBridge

### GitHub Actions
- **Build Check** - Validates builds on pull requests
- **Publish to S3** - Builds and deploys website to S3 on main branch
- **Build Lambda Image** - Builds and pushes Lambda container to ECR
