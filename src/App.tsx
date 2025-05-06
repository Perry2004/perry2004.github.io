import { HeroUIProvider } from "@heroui/react";
import {
  AboutMe,
  Home,
  Projects,
  Skills,
  WorkExperiences,
  Contacts,
  NavbarHeader,
  NavbarPlaceholder,
} from "@/components";
import ReactFullpage from "@fullpage/react-fullpage";
import { DeviceProvider, ThemeProvider } from "@/context";
import ClickSpark from "@/blocks/Animations/ClickSpark/ClickSpark";
import { useDevice } from "@/hooks";

// Component for mobile layout
function MobileLayout({ anchors }: { anchors: string[] }) {
  return (
    <>
      <NavbarHeader anchors={anchors} />
      <div id="home" className="sm:min-h-screen">
        <NavbarPlaceholder />
        <Home />
      </div>
      <div id="about-me" className="sm:min-h-screen">
        <AboutMe />
      </div>
      <div id="projects" className="sm:min-h-screen">
        <Projects />
      </div>
      <div id="work-experiences" className="sm:min-h-screen">
        <WorkExperiences />
      </div>
      <div id="skills" className="sm:min-h-screen">
        <Skills />
      </div>
      <div id="contacts" className="sm:min-h-screen">
        <Contacts />
      </div>
    </>
  );
}

// Component for desktop layout (fullpage)
function DesktopLayout({ anchors }: { anchors: string[] }) {
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

function AppContent() {
  const { isDesktop } = useDevice();
  const anchors = [
    "home",
    "about-me",
    "projects",
    "work-experiences",
    "skills",
    "contacts",
  ];

  return (
    <div className="font-raleway">
      {isDesktop ? (
        <DesktopLayout anchors={anchors} />
      ) : (
        <MobileLayout anchors={anchors} />
      )}
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <DeviceProvider>
        <HeroUIProvider>
          <ClickSpark
            sparkColor="#7046e3"
            sparkSize={20}
            sparkRadius={40}
            sparkCount={8}
            duration={400}
            extraScale={1.0}
          >
            <AppContent />
          </ClickSpark>
        </HeroUIProvider>
      </DeviceProvider>
    </ThemeProvider>
  );
}
