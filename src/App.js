import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navbar';
import HeroCard from './components/Hero-card/Hero';
import Section1 from './components/Section-1/Section-1';
import CardS2 from './components/Section-2/CardS2';
import CardS3 from './components/Section-3/CardS3';
import SectionForm from './components/Section4-Form-SignUp/Form';
import ContactForm from './components/Section5-Form-Contact/ContactForm';
import Footer from './components/Footer/Footer';
import Table1 from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroCard />
      <Section1 />
      <CardS2 />
      <CardS3 />
      <Table1 />
      <SectionForm />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
