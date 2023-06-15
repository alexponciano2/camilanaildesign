import './App.css';
import Banner from './components/Banner';
import Container from './components/Container';
import Header from "./components/Header"
import NavBar from './components/NavBar';
import Services from './components/Services';
import VerMais from './components/VerMais';


function App() {

  return (
    <>
      <Header/>
      <NavBar />
      <Banner/>
      <Container/>
      <Services/>
      <VerMais/>
    </>
  );
}

export default App;
