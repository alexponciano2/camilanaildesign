import './App.css';
import Agendamento from './components/Agendamento';
import ControlledCarousel from './components/BannerSlick';
import Banner from './components/Banner';
// import BannerSlick from './components/BannerSlick';
import Container from './components/Container';
import Contato from './components/Contato';
import Footer from './components/Footer';
// import FotoCamila from './components/FotoCamila';
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
      <div id='servicos'></div>
      <Services />
      <div id='agenda'></div>
      <Agendamento />
      <div id='endereco'></div>
      <Video />
      <div id='contato'></div>
      <Contato/>
      <VerMais />
      <Footer />
    </>
  );
}

export default App;
