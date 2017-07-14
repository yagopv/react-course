import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAXnA_JoQyyguUD7njI1ArXT1cG59p7_Lg';

const App = () => {  
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));