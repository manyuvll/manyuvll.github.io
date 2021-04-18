import { createGlobalStyle } from 'styled-components';
import NavigationBar from './features/navigationBar/NavigationBar'
import Win95Font from './assets/fonts/windows95.woff'
import DetailFont from './assets/fonts/detailFont.woff'
import Nintetyfive from './assets/fonts/ninetyfive.woff'
import WindowsStartMenu from './assets/fonts/FranklinGothic.ttf'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'win_custom';
    src: url(${Win95Font});
  }
  @font-face {
    font-family: 'win95_light';
    src: url(${DetailFont});
  }
  @font-face {
    font-family: 'ninety_five';
    src: url(${Nintetyfive});
  }
  @font-face {
    font-family: 'windows_start_menu';
    src: url(${WindowsStartMenu});
  }
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
