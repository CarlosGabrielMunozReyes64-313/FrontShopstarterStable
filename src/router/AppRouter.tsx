import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthChoice  from '../pages/AuthChoice/AuthChoice';
import LoginPage   from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página de elección: raíz del proyecto */}
        <Route path="/"         element={<AuthChoice />} />
        <Route path="/login"    element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Cualquier ruta desconocida vuelve al inicio */}
        <Route path="*"         element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}