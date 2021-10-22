import './App.css';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';
import Faq from './components/FourScreen';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <div>
        <Header />
        <FirstScreen name="top"/>
        <SecondScreen name="procces"/>
        <ThirdScreen />
        <Faq name="faq"/>
      </div>
    </div>
  );
}

export default App;
