import { createGlobalStyle } from 'styled-components';
import NavigationBar from './features/navbar/navigationBar/NavigationBar'
import About from './pages/about/About'
import Curriculum from './pages/curriculum/Curriculum'
import ContactMe from './pages/contactMe/ContactMe'
import Projects from './pages/projects/Projects'
import DesktopObjects from './features/desktopObject/DesktopObjects'
import { useAppSelector } from './app/hooks';
import { selectAboutPage, selectCurriculumPage, selectContactMePage, selectProjectsPage } from './pages/pagesSlicer';

const Style = createGlobalStyle`
  body, html  {
    background-color: #008f8f;
    overflow: hidden;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .App {
    height: 100%;
    width: 100%;
    display: flex;
  }

  .visible {
    visibility: visible;
  }
  .hidden {
    visibility: hidden
  }
`

function App() {
  const aboutPage = useAppSelector(selectAboutPage)
  const curriculumPage = useAppSelector(selectCurriculumPage)
  const contactMePage = useAppSelector(selectContactMePage)
  const projectsPage = useAppSelector(selectProjectsPage)

  return (
    <div className="App">
      <Style />
      <DesktopObjects/>
      <About customClass={aboutPage && !aboutPage.isMinimized ? 'visible' : 'hidden'} />
      <Curriculum customClass={curriculumPage && !curriculumPage.isMinimized ? 'visible' : 'hidden'}/>
      <ContactMe customClass={contactMePage && !contactMePage.isMinimized ? 'visible' : 'hidden'}/>
      <Projects customClass={projectsPage && !projectsPage.isMinimized ? 'visible' : 'hidden'}/>
      <NavigationBar/>
    </div>
  );
}

export default App;
