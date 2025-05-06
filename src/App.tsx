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
import { useDeviceType } from "@/hooks";

export function App() {
  const { isDesktop } = useDeviceType();
  const anchors = [
    "home",
    "about-me",
    "projects",
    "work-experiences",
    "skills",
    "contacts",
  ];

  // Component for mobile layout
  function MobileLayout() {
    return (
      <>
        <NavbarHeader anchors={anchors} />
        <div id="home" className="min-h-screen">
          <Home />
        </div>
        <div id="about-me" className="min-h-screen">
          <AboutMe />
        </div>
        <div id="projects" className="min-h-screen">
          <Projects />
        </div>
        <div id="work-experiences" className="min-h-screen">
          <WorkExperiences />
        </div>
        <div id="skills" className="min-h-screen">
          <Skills />
        </div>
        <div id="contacts" className="min-h-screen">
          <Contacts />
        </div>
      </>
    );
  }

  // Component for desktop layout (fullpage)
  function DesktopLayout() {
    return (
      <>
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
      </>
    );
  }

  return (
    <ThemeProvider>
      <HeroUIProvider>
        <ClickSpark
          sparkColor="#7046e3"
          sparkSize={20}
          sparkRadius={40}
          sparkCount={8}
          duration={400}
          extraScale={1.0}
        >
          <div className="font-raleway">
            {isDesktop ? <DesktopLayout /> : <MobileLayout />}
          </div>
        </ClickSpark>
      </HeroUIProvider>
    </ThemeProvider>
  );
}
