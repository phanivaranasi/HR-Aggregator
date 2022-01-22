import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar.component';
import CandidateRegi from './component/candidate.component';



function App() {



  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/candidate/:id" element={<CandidateRegi />} />
      </Routes>
    </div>
  );

}

export default App;
