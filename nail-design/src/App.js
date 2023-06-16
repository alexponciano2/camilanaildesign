import './App.css';
import Agendamento from './components/Agendamento';
import Banner from './components/Banner';
import Container from './components/Container';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FotoCamila from './components/FotoCamila';
import Header from "./components/Header"
import NavBar from './components/NavBar';
import Services from './components/Services';
import VerMais from './components/VerMais';
import Video from './components/VideoInicio';


function App() {

  return (
    <>
      <Header />
      <NavBar />
      <Banner />
      <Container />
      <Services />
      <Agendamento />
      <Video />
      <Contato/>
      <VerMais />
      <Footer />
    </>
  );
}

export default App;
