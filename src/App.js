import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';
import React, { useState } from "react";
import AppSearch from './components/AppSearch';

function App() {

  // Use state.
  const [selectedTattoo, setSelectedTatoo] = useState(null)
  const [searchText, setSearchText] = useState('')

  function onTattooOpenClick(theTattoo) {
    setSelectedTatoo(theTattoo);
  }
  function onTattooCloseClick() {
    setSelectedTatoo(null);
  }

  // Filtering and Mapping tattoos.
  const tattooElements = tattoos.filter((tattoo) => {
    return tattoo.title.includes(searchText);
  }).map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />
  });

  let tattooPost = null;
  // ถ้ามีจะเป็นจริง
  if (!!selectedTattoo) {
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />
  }

  return (
    <div className="App">
      <AppHeader />

      <section className="app-section">
        <div className="app-container">
          <AppSearch
            value={searchText}
            onValueChange={setSearchText}
          />
          <div className="app-grid">
            {tattooElements}
          </div>
        </div>
      </section>

      {tattooPost}

    </div>
  );
}

export default App;
