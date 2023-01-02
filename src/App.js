
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Global/Header/Header';
import OffCanvas from './Components/Pages/OffCanvas/OffCanvas';
import Banner from './Components/Pages/Banner/Banner';
import MySkill from './Components/Pages/MySkill/MySkill';
import Footer from './Components/Global/Footer/Footer';
import MyPortfolio from './Components/Pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Header></Header>
{/* <OffCanvas></OffCanvas> */}

<Banner></Banner>
<MySkill></MySkill>
<MyPortfolio></MyPortfolio>
<Footer></Footer>

    </div>
  );
}

export default App;
