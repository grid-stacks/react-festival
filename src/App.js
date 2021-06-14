import './App.css';
import Hero from './components/Hero';

import Company from './components/Company';

import CarouselComponent from './components/CarouselComponent';
import Platform from './components/Platform';
function App() {
  return (
    <div className='App'>
      <Hero />
      <Company />
      <CarouselComponent />
      <Platform />
    </div>
  );
}

export default App;
