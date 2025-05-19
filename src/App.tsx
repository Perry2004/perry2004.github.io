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
      <div
        id="home"
        className="animate-float-in-up opacity-0 sm:min-h-screen"
        style={{ animationDelay: "calc(var(--fade-in-delay-increment) * 1)" }}
      >
        <NavbarPlaceholder />
        <Home />
      </div>
      <div
        id="about-me"
        className="animate-float-in-up opacity-0 sm:min-h-screen"
        style={{ animationDelay: "calc(var(--fade-in-delay-increment) * 2)" }}
      >
        <AboutMe />
      </div>
      <div
        id="projects"
        className="animate-float-in-up opacity-0 sm:min-h-screen"
        style={{ animationDelay: "calc(var(--fade-in-delay-increment) * 3)" }}
      >
        <Projects />
      </div>
      <div
        id="work-experiences"
        className="animate-float-in-up opacity-0 sm:min-h-screen"
        style={{ animationDelay: "calc(var(--fade-in-delay-increment) * 4)" }}
      >
        <WorkExperiences />
      </div>
      <div
        id="skills"
        className="animate-float-in-up opacity-0 sm:min-h-screen"
        style={{ animationDelay: "calc(var(--fade-in-delay-increment) * 5)" }}
      >
        <Skills />
      </div>
      <div
        id="contacts"
        className="animate-float-in-up opacity-0 sm:min-h-screen"
        style={{ animationDelay: "calc(var(--fade-in-delay-increment) * 6)" }}
      >
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
              <div
                className="section animate-float-in-up opacity-0"
                style={{
                  animationDelay: "calc(var(--fade-in-delay-increment) * 1)",
                }}
              >
                <Home />
              </div>
              <div
                className="section animate-float-in-right opacity-0"
                style={{
                  animationDelay: "calc(var(--fade-in-delay-increment) * 2)",
                }}
              >
                <AboutMe />
              </div>
              <div
                className="section animate-float-in-left opacity-0"
                style={{
                  animationDelay: "calc(var(--fade-in-delay-increment) * 3)",
                }}
              >
                <Projects />
              </div>
              <div
                className="section animate-float-in-right opacity-0"
                style={{
                  animationDelay: "calc(var(--fade-in-delay-increment) * 4)",
                }}
              >
                <WorkExperiences />
              </div>
              <div
                className="section animate-float-in-left opacity-0"
                style={{
                  animationDelay: "calc(var(--fade-in-delay-increment) * 5)",
                }}
              >
                <Skills />
              </div>
              <div
                className="section animate-float-in-up opacity-0"
                style={{
                  animationDelay: "calc(var(--fade-in-delay-increment) * 6)",
                }}
              >
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
            <div
              className="animate-float-in-up opacity-0"
              style={{ animationDuration: "2s" }}
            >
              <AppContent />
            </div>
          </ClickSpark>
        </HeroUIProvider>
      </DeviceProvider>
    </ThemeProvider>
  );
}
