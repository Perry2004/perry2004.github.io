import { HeroUIProvider } from "@heroui/react";
import { AboutMe, Home, Projects, Skills, WorkExperiences } from "./components";
function App() {
  return (
    <HeroUIProvider>
      <main>
        <Home />
        <AboutMe />
        <Projects />
        <WorkExperiences />
        <Skills />
      </main>
    </HeroUIProvider>
  );
}

export default App;
