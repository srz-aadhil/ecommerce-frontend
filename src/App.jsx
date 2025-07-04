import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OTPPage from './pages/OTPPage';
import CartPage from './pages/CartPage';
import Categories from "./components/Categories";

function App() {
  return (
  <Router>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/verify" element={<OTPPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/categories" element={<Categories/>}/>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;