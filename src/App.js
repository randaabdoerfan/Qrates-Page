
import './App.css';
import { Card } from './Components/Card/Card';
import { Card2 } from './Components/Card2/Card2';
import { Card3 } from './Components/Card3/Card3';
import { Card4 } from './Components/Card4/Card4';
import { Card5 } from './Components/Card5/Card5';
import { Footer } from './Components/Footer/Footer';
import { Nav } from './Components/Nav/Nav';
import { Top } from './Components/Top/Top';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Top/>
      <Card/>
      <Card2/>
      <Card3/>
      <Card4/>
      <Card5/>
      <Footer/>

    </div>
  );
}

export default App;
