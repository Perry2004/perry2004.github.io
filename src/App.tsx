import { HeroUIProvider } from "@heroui/react";
import { AboutMe, Home, Projects, Skills, WorkExperiences } from "./components";
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    <HeroUIProvider>
      <ReactFullpage
        anchors={["home", "about-me", "projects", "work-experiences", "skills"]}
        navigation={true}
        scrollOverflow={true}
        credits={{
          enabled: false,
          label: "",
          position: "right",
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
              </div>
              <div className="section">
                <AboutMe />
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <WorkExperiences />
              </div>
              <div className="section">
                <Skills />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </HeroUIProvider>
  );
}

export default App;
