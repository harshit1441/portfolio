import './App.css';
import Header from './Components/Header';
import GlobalStyle from './GlobalStyle';
import Home from './Components/home';
import Services from './Components/Services';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <Home />
      <Services />
      <Resume />
      <Portfolio />
      <Contact />
      
    </div>
  );
}

export default App;
