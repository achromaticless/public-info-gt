import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './layout/header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './route/home';
import { FormRequest } from './route/form-request';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<FormRequest />} />
      </Routes>
    </>
  );
}

export default App;
