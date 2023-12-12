import {  Outlet } from 'react-router-dom';
import Topo from './components/topo'; 
import Rodape from './components/rodape'; 

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Topo /> 

    <div className="container">
      <main>
        <Outlet />
      </main>
    </div>

    </div>
    
  );
}

export default App;
