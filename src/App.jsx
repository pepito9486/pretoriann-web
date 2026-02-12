import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

//componente rutas globales
import Registerpage from './pages/registerform'
import Login from './pages/loginform';
//componentes de rutas
import Homepage from './pages/homepage'
import Profile from './pages/profile';
import Sistemamuscular from './pages/sistemamuscular';
import Entrenamiento from './pages/entrenamiento';
import Disciplinas from './pages/disciplinas';
import Protectedroute from './protectedroute';
import Nutricion from './pages/nutricion';
import Dietas from './pages/dietas';
import Calculadora from './pages/calculadora';
import Equipos from './pages/equipos';

import BlogPages from './blogs/Blogpages';
import BlogMitos from './blogs/BlogMitos'
import BlogTrainHome from './blogs/BlogTrainHome'
import BlogErrores from './blogs/BlogErrores'
// componentes generales
import Navbar from './components/navbar';
import Footer from './pages/footer';
import Avisolegal from './politicas/avisolegal';
import PoliticaPrivacidad from './politicas/PoliticaPrivacidas';
import PoliticasCookies from './politicas/PoliticasCookies';
import CookiesBanner from './pages/cookies';

import { HelmetProvider } from "react-helmet-async";
import Baner from './components/baner';
import Section from './components/secciones';
import Slider from './components/slider';



import { Theprovider } from './context/usuariocontext'
import { Providerproduct } from './context/productocontext';
import TerminosUso from './politicas/TerminosUso';




function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    // Reaplicar lazy loading en cada cambio de ruta
    const images = document.querySelectorAll('img:not(.no-lazy)');
    images.forEach(img => {
      // Si la imagen no tiene la propiedad "loading", se la añadimos
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });

    // 🧠 Limpieza opcional: puedes añadir logs si deseas depurar
    // console.log(`Lazy loading aplicado tras navegar a: ${location.pathname}`);
  }, [location.pathname]); // <- se vuelve a ejecutar cada vez que cambias de página


  return (
    <>
      {!isHome && <Navbar />}

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/blogpage" element={<BlogPages />} />
        <Route path="/blogmitos" element={<BlogMitos />} />
        <Route path="/blogentrenarencasa" element={<BlogTrainHome />} />
        <Route path="/blogerrores" element={<BlogErrores />} />

        <Route path="/sistema-muscular" element={<Sistemamuscular />} />
        <Route path="/entrenamiento" element={<Entrenamiento />} />
        <Route path="/disciplinas" element={<Disciplinas />} />
        <Route path="/nutricion" element={<Nutricion />} />
        <Route path="/dietas" element={<Dietas />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/equipamiento" element={<Equipos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/avisolegal" element={<Avisolegal />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/cookies" element={<PoliticasCookies />} />
        <Route path="/terminos" element={<TerminosUso />} />
        <Route element={<Protectedroute />}>
          <Route path="/profile" element={<Profile />} />

        </Route>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Theprovider>
      <Providerproduct>
        <BrowserRouter>
          <HelmetProvider>
            <CookiesBanner />
            <AppContent />
            <Footer />
          </HelmetProvider>
        </BrowserRouter>
      </Providerproduct>
    </Theprovider>
  );
}