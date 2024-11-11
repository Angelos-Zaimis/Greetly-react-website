import React from 'react';
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection';

function App() {
  return (
    <div className="bg-primaryBlue">
      <section className="h-screen flex justify-center items-center bg-primaryBlue text-white">
        <FirstSection/>
      </section>
      <section className="h-screen flex justify-center items-center bg-darkerBlue text-white">
        <SecondSection/>
      </section>
  </div>
  );  
}

export default App;