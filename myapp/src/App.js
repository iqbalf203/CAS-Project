import './App.css';
import AppRoutes from './components/AppRoutes';
import AdminAppRoutes from './components/admin/AppRoutes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer
          position="top-right" 
          autoClose={1500}
          closeOnClick
        />
    <Routes>
       <Route path="/user/*" element={<AppRoutes />} />
        <Route path="/admin/*" element={<AdminAppRoutes />} />
        <Route path='*' element={<AppRoutes/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
