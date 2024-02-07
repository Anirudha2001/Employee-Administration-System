import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route index element={<ListEmployeeComponent />} />
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="*" element={<ListEmployeeComponent />} />
          <Route path= "/add-employee" element={<AddEmployeeComponent/>} />
          <Route path='/edit-employee/:id' element={<AddEmployeeComponent/>}/>
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;


