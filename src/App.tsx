import { HeroUIProvider } from "@heroui/react";
import {
  AboutMe,
  Home,
  Projects,
  Skills,
  WorkExperiences,
  Contacts,
  NavbarHeader,
} from "@/components";
import ReactFullpage from "@fullpage/react-fullpage";
import { ThemeProvider } from "@/context";
import ClickSpark from "@/blocks/Animations/ClickSpark/ClickSpark";

export function App() {
  const anchors = [
    "home",
    "about-me",
    "projects",
    "work-experiences",
    "skills",
    "contacts",
  ];
  return (
    <ThemeProvider>
      <HeroUIProvider>
        <ClickSpark
          sparkColor="#fff"
          sparkSize={20}
          sparkRadius={40}
          sparkCount={8}
          duration={400}
          extraScale={1.0}
        >
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
                    <div className="section">
                      <Contacts />
                    </div>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          </div>
        </ClickSpark>
      </HeroUIProvider>
    </ThemeProvider>
  );
}
