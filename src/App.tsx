import { createGlobalStyle } from 'styled-components';
import NavigationBar from './features/navbar/navigationBar/NavigationBar'
import About from './pages/about/About'
import DesktopObjects from './features/desktopObject/DesktopObjects'
import { useAppSelector } from './app/hooks';
import { selectAboutIsOpened } from './pages/about/aboutSlicer';

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
  const aboutIsOpened = useAppSelector(selectAboutIsOpened)

  return (
    <div className="App">
      <Style />
      <DesktopObjects/>
      { aboutIsOpened && <About/>}
      <NavigationBar/>
    </div>
  );
}

export default App;
