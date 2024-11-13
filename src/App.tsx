import React from 'react';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';

function App() {
  return (
    <div className="bg-darkerBlue flex flex-col">
      <section className="flex flex-col justify-center items-center bg-darkerBlue text-white mb-10">
        <FirstSection />
      </section>
      <section className="flex flex-col justify-center items-center bg-darkerBlue text-white mb-10">
        <SecondSection />
      </section>
      <section className="flex flex-col justify-center items-center bg-darkerBlue text-white mb-10">
        <ThirdSection />
      </section>
    </div>
  );
}

export default App;
