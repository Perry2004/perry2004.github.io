import { ProjectInfo, IconedLink } from "@/components";
import { LinkText } from "@/components";
import { SiGithub } from "react-icons/si";

/**
 * This file contains the project details that will be displayed on the project cards.
 * Reference the ProjectInfo interface in the ProjectCard component for structure.
 * It is written in TSX as JSON does not support JSX elements.
 * Modifying the file requires re-building the project.
 */
export const projectInfos: ProjectInfo[] = [
  {
    title: "OOTDscribe",
    intro: (
      <>
        Full-Stack AI Integration Project with <code>TypeScript</code>,{" "}
        <code>React</code>, <code>MongoDB</code>, and <code>Gemini API</code>
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            <strong>Designed and developed</strong> an AI-powered web
            application that generates personalized journal entries based on
            users' daily outfit choices, enhancing the fashion documentation
            experience in a group of 4 during BCS Hack 2025.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Built a <strong>responsive and intuitive</strong> user interface
                using <code>TypeScript</code> and <code>React</code> that allows
                users to upload outfit images, input descriptive tags, and
                receive AI-generated content through an{" "}
                <strong>asynchronous communication pattern</strong>.
              </li>
              <li>
                Implemented backend services with <code>Express.js</code> and{" "}
                <code>MongoDB</code> for data persistence and integrated{" "}
                <strong>Google's Gemini AI API</strong> to process user inputs
                and generate contextually relevant outfit descriptions and
                journal entries.
              </li>
            </ul>
          </>
        ),
      },
      {
        shortDesc: (
          <>
            <strong>Containerized</strong> the entire application using{" "}
            <code>Docker</code> to ensure consistent development and deployment
            environments, with separate configurations for frontend and backend
            services.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Created an <strong>orchestrated Docker deployment</strong> with
                proper environment variable management for sensitive credentials
                and exposed <strong>RESTful API endpoints</strong> to handle the
                communication between frontend components and AI services.
              </li>
              <li>
                The containerized approach ensures consistent development and
                deployment environments across different systems.
              </li>
            </ul>
          </>
        ),
      },
    ],
    links: [
      <>
        <IconedLink href="https://github.com/Perry2004/AI-OOTD">
          <SiGithub />
          <LinkText>Check GitHub</LinkText>
        </IconedLink>
      </>,
    ],
  },
  {
    title: "Personal Website (this site)",
    intro: (
      <>
        Modern Frontend Development with <code>React</code>,{" "}
        <code>Tailwind CSS</code>, and <code>Three.js</code>
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            <strong>Designed and developed</strong> a personal portfolio website
            showcasing my information, experiences, and projects using modern
            web technologies.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Built the frontend using <code>React</code>,{" "}
                <code>TypeScript</code>, and <code>Tailwind CSS</code> with
                component libraries including <code>Hero UI</code> and{" "}
                <code>Radix UI</code> for a polished, responsive user interface
                that works seamlessly across all devices.
              </li>
              <li>
                Utilized modern development tools including <code>Vite</code>{" "}
                for fast builds, <code>ESLint</code> and <code>Prettier</code>{" "}
                for code quality, and <code>TypeScript</code> for type safety
                throughout the development process.
              </li>
            </ul>
          </>
        ),
      },
      {
        shortDesc: (
          <>
            <strong>Implemented interactive elements</strong> using{" "}
            <code>Framer Motion</code> animations, <code>Embla Carousel</code>,
            and custom 3D graphics with <code>Three.js</code> and{" "}
            <code>WebGL</code> for an engaging user experience.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Created smooth page transitions and scrolling effects with{" "}
                <code>fullpage.js</code> and <code>Framer Motion</code>{" "}
                animations to enhance the user experience.
              </li>
              <li>
                Designed unique interactive elements and immersive
                visualizations using <code>Three.js</code> and{" "}
                <code>WebGL</code> to showcase technical creativity and provide
                a memorable browsing experience.
              </li>
            </ul>
          </>
        ),
      },
      {
        shortDesc: (
          <>
            <strong>Deployed the site</strong> using <code>Docker Compose</code>{" "}
            with <code>Caddy</code> as a web server on an{" "}
            <strong>AWS EC2 instance</strong> for reliable, secure hosting with
            automatic HTTPS.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                The deployment strategy ensures high availability and security
                through containerization with <code>Docker</code> and automatic
                HTTPS certificate management via <code>Caddy</code>.
              </li>
              <li>
                The AWS infrastructure provides scalability and reliability for
                consistent performance across varying traffic levels,
                simplifying maintenance and updates while ensuring a
                professional hosting environment.
              </li>
            </ul>
          </>
        ),
      },
    ],
    links: [
      <>
        <IconedLink href="https://github.com/Perry2004/PerryZ-Website">
          <SiGithub />
          <LinkText>Check Github</LinkText>
        </IconedLink>
      </>,
    ],
  },
  {
    title: "WeChat Message Analysis and Forecasting",
    intro: (
      <>
        Time-series data analysis and forecasting project using{" "}
        <code>Python</code>{" "}
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            <strong>Encoded date/time data</strong> as datetime objects to carry
            out continuous time-series analysis, including visualization,
            decomposition, and forecasting.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Performed <strong>comprehensive time-series analysis</strong> on
                WeChat message data, including data cleaning, visualization, and
                decomposition to understand temporal patterns.
              </li>
              <li>
                Utilized various{" "}
                <strong>time-series forecasting techniques</strong> to predict
                future message frequencies and trends.
              </li>
            </ul>
          </>
        ),
      },
      {
        shortDesc: (
          <>
            <strong>Data-engineered features</strong> by extracting date/time
            components, creating lag features, categorically encoding data,
            generating interaction and polynomial terms, and computing lagged
            differences to improve model performance.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Enhanced model performance through{" "}
                <strong>feature engineering</strong> by extracting date/time
                components, creating lag features, categorically encoding data,
                generating interaction and polynomial terms, and computing
                lagged differences.
              </li>
              <li>
                Developed and evaluated{" "}
                <strong>multiple time-series models</strong> with various
                hyperparameters and feature setups to forecast future values
                with <strong>high accuracy</strong>.
              </li>
            </ul>
          </>
        ),
      },
    ],
    links: [
      <>
        <IconedLink href="https://github.com/Perry2004/Wechat-Message-Analysis">
          <SiGithub />
          <LinkText>Check GitHub</LinkText>
        </IconedLink>
      </>,
    ],
  },
  {
    title: "NYC Airbnb Reviews ML Prediction",
    intro: (
      <>
        Supervised Machine Learning Project Using <code>Python</code> and
        Multiple Models
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            <strong>Constructed and evaluated</strong> several machine learning
            pipelines to predict the number of reviews per month of Airbnb
            listings in New York.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Performed <strong>data preprocessing</strong> and{" "}
                <strong>feature engineering</strong> by imputing missing values
                to satisfy the models, standardizing numeric variables to
                improve analogy-based models, and discretizing continuous
                features to enhance linear models.
              </li>
              <li>
                Encoded text features using the <strong>bags of words</strong>{" "}
                representation using the Count Vectorizer, and categorical
                features using <strong>One Hot Encoding</strong> so they can be
                absorbed by the models.
              </li>
            </ul>
          </>
        ),
      },
      {
        shortDesc: (
          <>
            <strong>Developed pipelines</strong> for multiple models, including
            linear <code>Ridge</code> model,{" "}
            <code>Decision Tree Regressor</code>, <code>SVM</code> with RBF
            kernel, and <code>XGBoost</code> ensemble model.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Conducted hyperparameter tuning using a{" "}
                <strong>randomized search</strong>
                and chose the best-performing parameter according to
                cross-validation scores to reduce the performance loss by
                overfitting and underfitting.
              </li>
              <li>
                Selected essential features using <code>Select From Model</code>{" "}
                with XGBRegresor and <strong>Forward Search</strong> approach to
                reduce overfitting, mitigate the curse of dimensionality, and
                enhance interpretability and training speeds.
              </li>
              <li>
                Evaluated and interpreted the models using <code>SHAP</code> on
                the test set. The best-performing model achieved around{" "}
                <strong>1.3 MAPE</strong>, and the predicted results can be
                explained logically and consistently with real-world
                understanding.
              </li>
            </ul>
          </>
        ),
      },
    ],
    links: [
      <>
        <IconedLink href="https://github.com/Perry2004/NYC-Airbnb-Reviews-ML-Prediction">
          <SiGithub />
          <LinkText>Check GitHub</LinkText>
        </IconedLink>
      </>,
    ],
  },
  {
    title: "UNO Game Management System",
    intro: (
      <>
        Full-Stack Data Management Project with <code>HTML</code>,{" "}
        <code>CSS</code>, <code>JavaScript</code>, and <code>SQL</code>
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            <strong>Designed and developed</strong> a program that manages all
            game data in a UNO card game in 5 pages plus an administrator
            authentication page in a group of 3.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Constructed a front-end interface with{" "}
                <strong>comprehensive form validation</strong>, clear visual
                notifications, animations, and smooth interaction by avoiding
                extra refresh using <strong>asynchronous fetches</strong> to
                replace the default form submission behavior using{" "}
                <code>HTML</code>, <code>CSS</code>, and <code>JavaScript</code>
                .
              </li>
              <li>
                The system provides a seamless user experience for managing UNO
                game data.
              </li>
            </ul>
          </>
        ),
      },
      {
        shortDesc: (
          <>
            <strong>Utilized RESTful API</strong> to set up the communication
            between front- and back-end using <code>Express</code> framework and
            used cookies and local storage to enable previous state restoration
            and authentication state preservation.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Tailored <code>SQL DDLs</code> and <code>DML</code> templates in
                the backend model with{" "}
                <strong>sanitization to prevent injection</strong> for
                functionalities, including nested group- by aggregation,
                division, and view creations to handle user request actions
                triggered by front-end event listeners.
              </li>
              <li>
                The system uses <code>cookies</code> and{" "}
                <code>local storage</code> for a better interactive experience,
                preserving user state and authentication information.
              </li>
            </ul>
          </>
        ),
      },
    ],
    links: [
      <>
        <IconedLink href="https://github.com/Perry2004/uno-game-management-system">
          <SiGithub />
          <LinkText>Check GitHub</LinkText>
        </IconedLink>
      </>,
    ],
  },
  {
    title: "Two-Player Snake Game",
    intro: (
      <>
        Real-Time Interactive Game With <code>Java</code> and{" "}
        <code>MatLab</code>
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            <strong>Constructed a video game</strong> that allows two players to
            play the traditional Snake game on the same computer.{" "}
            <strong>Won the 1st place winner</strong> of the Fundamentals of
            Engineering Design Showcase.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                <strong>Best group</strong> among all first-year students in the
                OSU College of Engineering with the contribution of developing
                the main
                <strong>game-loop logic</strong> in a group of 4.
              </li>
              <li>
                Developed the game in <code>MatLab</code> with the provided game
                engine by initializing the game window with self-created
                stripes, modeling the gameboard in a 2d matrix, maintaining a{" "}
                <strong>synchronous execution</strong> to tick the snake
                movements and food generation while handling user inputs{" "}
                <strong>asynchronously</strong> by event listeners and model
                updates with callback functions.
              </li>
            </ul>
          </>
        ),
      },
      {
        shortDesc: (
          <>
            <strong>Later migrated</strong> the MatLab game to Java with two
            interfaces with <code>Swing</code> and <code>Lanterna</code>{" "}
            libraries in an <strong>object-oriented</strong> manner.
          </>
        ),
        longDesc: (
          <>
            <ul>
              <li>
                Empowered with <strong>singleton</strong>,{" "}
                <strong>observer</strong>, and{" "}
                <strong>MVC design patterns</strong> to divide the project into
                separate components and hierarchies with well-specified
                interfaces for better maintainability and scalability.
              </li>
              <li>
                The OOP design also features extra functionality for{" "}
                <strong>serializing and exporting</strong> all game data into
                JSON for further reuse.
              </li>
              <li>
                Maintained <strong>100% unit test coverage</strong> check while
                developing the Java version using <code>JUnit</code>.
              </li>
            </ul>
          </>
        ),
      },
    ],
    links: [
      <>
        <IconedLink href="https://github.com/Perry2004/two-player-snake-game-matlab">
          <SiGithub />
          <LinkText>MatLab Version</LinkText>
        </IconedLink>
      </>,
      <>
        <IconedLink href="https://github.com/Perry2004/two-player-snake-game-java">
          <SiGithub />
          <LinkText>Java Version</LinkText>
        </IconedLink>
      </>,
    ],
  },
];
