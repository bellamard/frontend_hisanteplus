
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login";
import Registre from "./pages/registre";
import NotFound from "./pages/notFound";
import Dashboard from './pages/dashboard';
import Meets from './pages/dashboard/meets'
import Patients from './pages/dashboard/patients';
import Patient from './pages/dashboard/patients/patient';
import './App.css';
import Footer from './components/footer';

const App = () => {
  return (

    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/signin" element={<Registre />} />
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/dashboard/meets" element={<Meets />} />
          <Route path="/dashboard/patients" element={<Patients />} exact />
          <Route path="/dashboard/patients/:id" element={<Patient />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
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
