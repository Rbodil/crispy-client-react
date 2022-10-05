import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [results, setResults] = useState();

  return (
    <div className="w-screen h-screen">
      <header className="sticky">
        <Header/>
      </header>
      <main className=' w-full h-full flex flex-col px-5 overflow-scroll overflow-x-hidden bg-blue text-white'>
        <Search setResults={setResults}/>
        <Results results={results}/>
      </main>
    </div>
  );
}

export default App;
