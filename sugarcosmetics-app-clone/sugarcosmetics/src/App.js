import "./App.css";



import './App.css';
// <<<<<<< HEAD
import Home from './components/pages/Home/Home';
import Payment from './components/pages/Payment/Payment';
// =======
import BreshesData from './components/pages/Breshes/BreshesData';
import Header from './components/pages/navbar/Header';
import { BestSellers } from './components/pages/Trending/BestSellers';
import MakeupKit from './components/pages/Trending/MakeupKit';
import { MerchStation } from './components/pages/Trending/MerchStation';
import Delivery from './components/pages/Payment/Delivery'
import Footer from './components/pages/footer/Footer'


import { MainRouter } from "./components/routes/MainRouter";
// import MyOffers from "./components/pages/Offer/MyOffer";
// import BestOffer from "./components/pages/Offer/BestOffer";



function App() {
  return (
    <div className="App">
{/* <<<<<<< HEAD */}

{/* <<<<<<< HEAD */}

    {/* <Payment/> */}



      <MainRouter />
{/* >>>>>>> 57c2e83d665baf15382b198dce643316981a6abc */}
    </div>
  );
}

export default App;
