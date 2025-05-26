# perry2004.github.io 🌟

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features stunning animations, interactive components, WebGL shaders, and a sleek design showcasing my professional journey.

**🌐 Live Website**: [https://perryz.net](https://perryz.net)

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white) ![WebGL](https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white) ![Caddy](https://img.shields.io/badge/Caddy-1F88C0?logo=caddy&logoColor=white)

## ✨ Features

- ⚡ **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for optimal performance
- 📱 **Responsive Design**: Fully responsive across all devices with mobile-first approach
- 🎭 **Smooth Animations**: Powered by Framer Motion for fluid, engaging interactions
- 📄 **Full-Screen Scrolling**: Seamless page navigation with fullpage.js
- 🎨 **WebGL Graphics**: Custom shaders and 3D effects for immersive visual experiences
- 🎡 **Interactive Components**: Custom carousel, rolling images, and animated text effects
- 🌓 **Dark/Light Theme**: Dynamic theme switching with system preference detection
- 📄 **Professional Sections**: Home, About, Skills, Projects, Work Experience, and Contact
- 🚀 **Performance Optimized**: Fast loading with efficient code splitting and asset optimization

## 🛠️ Technologies & Tools

| Category                         | Technology              | Description                                           |
| -------------------------------- | ----------------------- | ----------------------------------------------------- |
| **🎯 Frontend Framework**        | ⚛️ **React 19**         | Latest React with concurrent features                 |
|                                  | 🔷 **TypeScript**       | Type-safe development                                 |
|                                  | ⚡ **Vite**             | Lightning-fast build tool and dev server              |
| **🎨 Styling & UI**              | 🌊 **Tailwind CSS**     | Utility-first CSS framework                           |
|                                  | 🦸 **HeroUI/React**     | Modern component library with beautiful design system |
|                                  | 🧩 **React Bits**       | Advanced UI components and utilities                  |
|                                  | 🔧 **PostCSS**          | CSS processing and optimization                       |
|                                  | ✨ **Tailwind Animate** | CSS animations for Tailwind                           |
| **🎭 Animations & Interactions** | 🎬 **Framer Motion**    | Production-ready motion library                       |
|                                  | 📄 **fullpage.js**      | Smooth full-screen scrolling and page transitions     |
|                                  | 🎠 **Embla Carousel**   | Modern carousel with autoplay                         |
|                                  | 🎯 **React Icons**      | Comprehensive icon library                            |
|                                  | 🎮 **OGL**              | WebGL library for 3D graphics and custom shaders      |
| **📡 Data & API**                | 🌐 **Axios**            | HTTP client for API requests                          |
|                                  | ⏰ **React Chrono**     | Timeline component for work experience                |
| **🔧 Development Tools**         | 📦 **npm/Yarn**         | Package management                                    |
|                                  | 🔍 **ESLint**           | Code linting and quality                              |
|                                  | 🎨 **Prettier**         | Code formatting                                       |
|                                  | 🐳 **Docker**           | Containerization                                      |
|                                  | ☁️ **AWS EC2**          | Cloud hosting                                         |
|                                  | 🌐 **Caddy**            | Web server with automatic HTTPS                       |

## 📁 Project Structure

```
📦 perry2004.github.io/
├── 📦 src/
│   ├── 🧩 components/         # Reusable UI components
│   │   ├── 🏗️ layout/         # Navigation and layout components
│   │   ├── 📄 pages/          # Page components (Home, About, etc.)
│   │   └── 🎯 ui/             # Reusable UI elements
│   ├── 🎭 blocks/             # Specialized interactive blocks
│   │   ├── 🎬 Animations/     # Animation components
│   │   ├── 🎨 Backgrounds/    # Background effects
│   │   └── ✨ TextAnimations/ # Text animation effects
│   ├── 🔄 context/            # React context providers
│   ├── 🪝 hooks/              # Custom React hooks
│   ├── 📂 assets/             # Static resources
│   └── 🎨 styles/             # Global styles
├── 🌐 public/                 # Static assets and metadata
│   ├── 📀 data/               # JSON data assets
│   └── 🏷️ favicon.ico         # Site favicon
├── 🐳 Dockerfile              # Docker configuration
├── 📋 package.json            # Dependencies and scripts
└── 📝 README.md               # Project documentation
```

### 📊 Component Breakdown

| Category                | Components     | Purpose                             |
| ----------------------- | -------------- | ----------------------------------- |
| 📄 **Pages**            | 6 pages        | Main application views              |
| 🎯 **UI Components**    | 10+ components | Reusable interface elements         |
| 🎭 **Animation Blocks** | 5+ components  | Interactive visual effects          |
| 🪝 **Custom Hooks**     | 9 hooks        | Reusable logic and state management |

## 🚀 Local Development

### 📋 Prerequisites

| Requirement            | Version               | Purpose               |
| ---------------------- | --------------------- | --------------------- |
| 📗 **Node.js**         | 18+ (recommended: 22) | JavaScript runtime    |
| 📦 **Package Manager** | Yarn or npm           | Dependency management |

### ⚙️ Installation

1. **📥 Clone the repository**

   ```bash
   git clone https://github.com/Perry2004/perry2004.github.io.git
   cd perry2004.github.io
   ```

2. **📦 Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **🚀 Start development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **🌐 Open your browser**

   Navigate to `http://localhost:5173` to see the application running.

### 🎯 Available Scripts

| Command           | Description                              | Usage         |
| ----------------- | ---------------------------------------- | ------------- |
| `🚀 yarn dev`     | Start development server with hot reload | Development   |
| `🏗️ yarn build`   | Build for production                     | Production    |
| `👀 yarn preview` | Preview production build locally         | Build Testing |
| `🔍 yarn lint`    | Run ESLint for code quality              | Quality Check |

## 🏗️ Build & Deployment

### 🎯 Production Build

```bash
# 🔨 Build the application
yarn build

# 👀 Preview the build locally
yarn preview
```

The build output will be generated in the `📁 dist/` directory, ready for deployment.

### 🐳 Local Docker Development (`localhost`)

| Command                   | Purpose                       | Usage                |
| ------------------------- | ----------------------------- | -------------------- |
| `🚀 yarn deploy:dev`      | Start development environment | Local Docker testing |
| `📋 yarn deploy:dev:logs` | View container logs           | Debugging            |
| `⏹️ yarn deploy:dev:down` | Stop development environment  | Cleanup              |

## ☁️ Cloud Deployment Strategy (Custom Domain)

This project uses a **containerized deployment strategy** with **🐳 Docker** and **☁️ AWS EC2** hosting, featuring an automated CI/CD pipeline and production-grade infrastructure.

### 🏗️ Architecture Overview

#### 1. 🐳 **Multi-Stage Docker Build Process**

- **Stage 1 (Builder)**: 📗 Node.js Alpine image compiles React/TypeScript source code with Vite
- **Stage 2 (Runtime)**: 🌐 Caddy Alpine image serves the built static files
- **Environment Configuration**: Different Caddyfile configurations for dev vs production
  - `Caddyfile.dev` - Local development (localhost:3000)
  - `Caddyfile.prod` - Production deployment (perryz.net with HTTPS)
- **Benefits**: Minimal production image size (~50MB) - no build tools in final image
- **Registry**: [🐳 Docker Hub - perry2004/perryz.net](https://hub.docker.com/repository/docker/perry2004/perryz.net/general)

#### 2. 🔧 **Environment Configuration Management**

| Environment        | Configuration File | Purpose                                | Deployment Target |
| ------------------ | ------------------ | -------------------------------------- | ----------------- |
| 🏠 **Development** | `Caddyfile.dev`    | Local testing with basic HTTP serving  | `localhost`       |
| ☁️ **Production**  | `Caddyfile.prod`   | HTTPS, custom domain, security headers | `perryz.net`      |

#### 3. 🌐 **Caddy Web Server**

- 🔒 **Automatic HTTPS** with Let's Encrypt certificates
- ⚡ **HTTP/2 & HTTP/3** support for optimal performance
- 🛡️ **Security headers** and modern web standards
- 📦 **Gzip compression** for faster loading

#### 4. ☁️ **AWS EC2 Infrastructure**

- 📈 **Scalable hosting** on Amazon Web Services
- 🌐 **Custom domain**: `perryz.net`
- 🔄 **WWW redirect**: Automatic redirect from `www.perryz.net` to `perryz.net`
- 💓 **Health checks**: Container health monitoring
- 🔄 **Auto-restart**: Automatic container restart on failure

### 🚀 Deployment Commands

| Command                     | Purpose                                 | Environment |
| --------------------------- | --------------------------------------- | ----------- |
| `📦 yarn deploy:build-push` | Build and push Docker image to registry | CI/CD       |
| `🚀 yarn deploy:prod`       | Deploy to production                    | Production  |
| `📋 yarn deploy:prod:logs`  | Monitor production logs                 | Monitoring  |
| `⏹️ yarn deploy:prod:down`  | Stop production deployment              | Maintenance |

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

**Perry Zhu** - 💻 Full Stack Developer

<table>
<tr>
<td width="50%">

### 🌐 **Professional Links**

- 🏠 **Website**: [perryz.net](https://perryz.net)
- 💼 **LinkedIn**: [Perry Z](https://www.linkedin.com/in/perry-z/)
- 📧 **GitHub**: [@Perry2004](https://github.com/Perry2004)

</td>
<td width="50%">

### 📱 **Social Media**

- 📷 **Instagram**: [@perryzhu2004](https://www.instagram.com/perryzhu2004/)
- 🎥 **Pexels**: [Photography Portfolio](https://www.pexels.com/@perry-z-1662054943/)

</td>
</tr>
</table>

---

_Built under the mountain and by the sea at Vancouver by Perry Zhu_
