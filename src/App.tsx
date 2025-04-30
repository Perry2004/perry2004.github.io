import { HeroUIProvider } from "@heroui/react";
import {
  AboutMe,
  Home,
  Projects,
  Skills,
  WorkExperiences,
  NavbarHeader,
} from "./components";
import ReactFullpage from "@fullpage/react-fullpage";

export function App() {
  const anchors = [
    "home",
    "about-me",
    "projects",
    "work-experiences",
    "skills",
  ];
  return (
    <HeroUIProvider>
      <div className="font-raleway">
        <NavbarHeader anchors={anchors} />
        <ReactFullpage
          anchors={anchors}
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
      </div>
    </HeroUIProvider>
  );
}
