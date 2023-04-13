import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import Home from './containers/Home';
import Users from './containers/Users';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;