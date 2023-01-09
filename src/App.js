import './App.scss';
import PricingPage from './pages/PricingPage';
import HomePage from './pages/HomePage';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pricing/" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
