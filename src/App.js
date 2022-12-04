import logo from './logo.svg';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import './App.css';

function App() {
  return (

    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
