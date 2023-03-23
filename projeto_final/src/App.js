import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Company } from './components/pages/Company';
import { Contact } from './components/pages/Contact';
import { Newproject } from './components/pages/Newproject';
import { Projetos } from './components/pages/Projetos';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';

import { Contanier } from './components/layout/Contanier';
function App() {
  return (
    <Router>
    
      <NavBar/>

      <Contanier> 

        <Routes>
          <Route extatc path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/projetos' element={<Projetos/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<Newproject />} />
        </Routes>

      </Contanier>

      <Footer/>
    </Router>

  );
}

export default App;
