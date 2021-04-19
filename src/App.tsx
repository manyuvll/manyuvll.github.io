import { createGlobalStyle } from 'styled-components';
import NavigationBar from './features/navigationBar/NavigationBar'
import Win95Font from './assets/fonts/windows95.woff'
import DetailFont from './assets/fonts/detailFont.woff'
import Nintetyfive from './assets/fonts/ninetyfive.woff'
import WindowsStartMenu from './assets/fonts/FranklinGothic.ttf'

const Fonts = createGlobalStyle`
  body, html  {
    background-color: #008f8f;
    overflow: hidden;
  }
`


function App() {
  return (
    <div className="App">
      <Fonts />
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default App;
