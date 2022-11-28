import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navbar';
import HeroCard from './components/Hero-card/Hero';
import Section1 from './components/Section-1/Section-1';
import CardS2 from './components/Section-2/CardS2';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroCard />
      <Section1 />
      <CardS2 />
    </div>
  );
}

export default App;
