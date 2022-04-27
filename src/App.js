import "./App.css";
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/Router'
// import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
