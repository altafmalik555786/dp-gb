import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
