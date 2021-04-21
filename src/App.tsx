import { createGlobalStyle } from 'styled-components';
import NavigationBar from './features/navbar/navigationBar/NavigationBar'
import About from './pages/about/About'
import styled from 'styled-components';
import DesktopObjects from './features/desktopObject/DesktopObject'

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
  return (
    <div className="App">
      <Style />
        <DesktopObjects></DesktopObjects>
      <About/>
      <NavigationBar/>
    </div>
  );
}

export default App;
