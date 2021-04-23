import { createGlobalStyle } from 'styled-components';
import NavigationBar from './features/navbar/navigationBar/NavigationBar'
import About from './pages/about/About'
import DesktopObjects from './features/desktopObject/DesktopObjects'
import { useAppSelector } from './app/hooks';
import { selectAboutPage } from './pages/pagesSlicer';

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
`

function App() {
  const aboutPage = useAppSelector(selectAboutPage)

  return (
    <div className="App">
      <Style />
      <DesktopObjects/>
      { aboutPage && !aboutPage.isMinimized && <About/>}
      <NavigationBar/>
    </div>
  );
}

export default App;
