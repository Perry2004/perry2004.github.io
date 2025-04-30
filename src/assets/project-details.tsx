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
        <code>React</code>, and <code>MongoDB</code>
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            Developed an AI-powered web application that generates personalized
            journal entries based on users' daily outfit choices.
          </>
        ),
        longDesc: (
          <>
            Built a responsive and intuitive user interface using{" "}
            <code>TypeScript</code> and <code>React</code> that allows users to
            upload outfit images, input descriptive tags, and receive
            AI-generated content through an asynchronous communication pattern.
            Implemented backend services with <code>MongoDB</code> for data
            persistence and integrated Google's Gemini AI API to process user
            inputs and generate contextually relevant outfit descriptions and
            journal entries.
          </>
        ),
      },
      {
        shortDesc: (
          <>
            Containerized the application using <code>Docker</code> with
            separate configurations for frontend and backend services.
          </>
        ),
        longDesc: (
          <>
            Created a scalable architecture with proper environment variable
            management for sensitive credentials and designed RESTful API
            endpoints to handle the communication between frontend components
            and AI services. The containerized approach ensures consistent
            development and deployment environments across different systems.
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
    title: "Personal Website",
    intro: (
      <>
        Full-Stack Web Design & Development With <code>Bootstrap</code>,{" "}
        <code>Three.js</code>, and <code>Express.js</code>
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            Built and hosted a full-stack website using <code>HTML5</code>,{" "}
            <code>Sass</code>, <code>Bootstrap</code>, and <code>Three.js</code>{" "}
            for 3D graphics.
          </>
        ),
        longDesc: (
          <>
            The website is designed to showcase my projects, skills, and
            experiences in a visually appealing and interactive way. The
            frontend is built with <code>HTML5</code>, <code>Bootstrap</code>,{" "}
            <code>Sass</code>, <code>TypeScript</code>, and{" "}
            <code>Three.js</code>. The website is designed in a responsive
            manner to ensure compatibility with different devices and screen
            sizes.
          </>
        ),
      },
      {
        shortDesc: (
          <>
            Hosted on an AWS Linux EC2 instance with a <code>Node.js</code>{" "}
            backend and
            <code>Express</code> framework.
          </>
        ),
        longDesc: (
          <>
            The backend is constructed with <code>Node.js</code> and{" "}
            <code>Express</code> framework. It is hosted on an AWS Linux EC2
            instance on my personal domain. The backend is responsible for
            serving the frontend resources, handling API requests, and managing
            user data. The website is designed to be scalable and maintainable,
            with a focus on performance and security.
          </>
        ),
      },
    ],
    links: [
      <>
        <IconedLink href="https://github.com/Perry2004/PerryZ-Website">
          <SiGithub />
          <LinkText>GitHub Repository</LinkText>
        </IconedLink>
      </>,
      <>
        <IconedLink href="https://github.com/perry2004/perry2004.github.io">
          <SiGithub />
          <LinkText>GitHub Pages</LinkText>
        </IconedLink>
      </>,
    ],
  },
  {
    title: "WeChat Message Analysis and Forecasting",
    intro: (
      <>
        Time-series data analysis and forecasting project using{" "}
        <code>Python</code> and machine learning
      </>
    ),
    descriptions: [
      {
        shortDesc: (
          <>
            Encoded date/time data as datetime objects to carry out continuous
            time-series analysis, including visualization, decomposition, and
            forecasting.
          </>
        ),
        longDesc: (
          <>
            Performed comprehensive time-series analysis on WeChat message data,
            including data cleaning, visualization, and decomposition to
            understand temporal patterns. Utilized various time-series
            forecasting techniques to predict future message frequencies and
            trends.
          </>
        ),
      },
      {
        shortDesc: (
          <>
            Data-engineered features by extracting date/time components,
            creating lag features, and computing lagged differences.
          </>
        ),
        longDesc: (
          <>
            Enhanced model performance through feature engineering by extracting
            date/time components, creating lag features, categorically encoding
            data, generating interaction and polynomial terms, and computing
            lagged differences. Developed and evaluated multiple time-series
            models with various hyperparameters and feature setups to forecast
            future values with high accuracy.
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
            Built machine learning pipelines to predict the number of reviews
            per month for Airbnb listings in New York.
          </>
        ),
        longDesc: (
          <>
            Constructed and evaluated several machine learning pipelines to
            predict the number of reviews per month of Airbnb listings in New
            York. Performed data preprocessing and feature engineering by
            imputing missing values, standardizing numeric variables to improve
            analogy-based models, and discretizing continuous features to
            enhance linear models.
          </>
        ),
      },
      {
        shortDesc: (
          <>
            Implemented feature engineering, model selection, and hyperparameter
            tuning to optimize prediction accuracy.
          </>
        ),
        longDesc: (
          <>
            Encoded text features using the bags of words representation with
            Count Vectorizer, and categorical features with One Hot Encoding.
            Developed pipelines for multiple models, including linear Ridge
            model, Decision Tree Regressor, SVM with RBF kernel, and XGBoost
            ensemble model. Conducted hyperparameter tuning using randomized
            search and selected essential features using Select From Model with
            XGBRegresor and Forward Search approach to reduce overfitting and
            enhance interpretability. The best-performing model achieved around
            1.3 MAPE with results that could be explained logically.
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
            Designed and developed a program that manages all game data in a UNO
            card game across 5 pages plus an administrator authentication page.
          </>
        ),
        longDesc: (
          <>
            Constructed a front-end interface with comprehensive form
            validation, clear visual notifications, animations, and smooth
            interaction by avoiding extra refresh using asynchronous fetches to
            replace the default form submission behavior using HTML, CSS, and
            JavaScript. The system provides a seamless user experience for
            managing UNO game data.
          </>
        ),
      },
      {
        shortDesc: (
          <>
            Utilized RESTful API for front-end/back-end communication and
            implemented secure data management with SQL.
          </>
        ),
        longDesc: (
          <>
            Utilized RESTful API to set up the communication between front- and
            back-end using Express framework and used cookies and local storage
            to enable previous state restoration and authentication state
            preservation. Tailored SQL DDLs and DML templates in the backend
            model with sanitization to prevent injection for functionalities,
            including nested group-by aggregation, division, and view creations
            to handle user request actions triggered by front-end event
            listeners.
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
            Constructed a video game that allows two players to play the
            traditional Snake game on the same computer.
          </>
        ),
        longDesc: (
          <>
            Won the 1st place in the Fundamentals of Engineering Design Showcase
            for being the best group among all first-year students in the OSU
            College of Engineering. Developed the game in MatLab with the
            provided game engine by initializing the game window with
            self-created stripes, modeling the gameboard in a 2D matrix, and
            maintaining a synchronous execution to tick the snake movements and
            food generation while handling user inputs asynchronously.
          </>
        ),
      },
      {
        shortDesc: (
          <>
            Migrated the MatLab game to Java with Swing and Lanterna libraries
            using object-oriented design patterns.
          </>
        ),
        longDesc: (
          <>
            Later migrated the MatLab game to Java with two interfaces using
            Swing and Lanterna libraries in an object-oriented manner. Empowered
            with singleton, observer, and MVC design patterns to divide the
            project into separate components and hierarchies with well-specified
            interfaces for better maintainability and scalability. The OOP
            design also features extra functionality for serializing and
            exporting all game data into JSON for further reuse. Maintained 100%
            unit test coverage check while developing the Java version using
            JUnit.
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
