import { createGlobalStyle } from 'styled-components';
import NavigationBar from './features/navigationBar/NavigationBar'
import About from './pages/about/About'

const Style = createGlobalStyle`
  body, html  {
    background-color: #008f8f;
    overflow: hidden;
    height:100%;
  }
`

function App() {
  return (
    <div className="App">
      <Style />
      <About></About>
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default App;
