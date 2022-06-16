import Customers from './Customers'
import Transactions from './Transactions'
import Home from './Home'
import Create from './Create'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/customers' element={<Customers/>} />
        <Route path='/transactions' element={<Transactions/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
