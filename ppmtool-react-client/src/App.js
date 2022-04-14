import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    
    <Header/>
    <Dashboard/>
    
    </div>
    </Router>
   
    
  );
}

export default App;