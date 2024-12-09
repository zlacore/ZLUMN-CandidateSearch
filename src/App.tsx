import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { SetStateAction, useState } from 'react';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import { render } from 'react-dom';

// interface appProps {
//   navTab: string;
// }

// interface outletProps {
  
// }
function App () {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
