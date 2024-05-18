import logo from './logo.svg';
import './App.css';
import AppRoutes from './components/AppRoutes';
import AdminAppRoutes from './components/admin/AppRoutes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/user/*" element={<AppRoutes />} />
        <Route path="/admin/*" element={<AdminAppRoutes />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
