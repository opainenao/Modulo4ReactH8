import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Register from './register';
import Login from './Login';

//hito 2
{/*const App = () => {
  return (
  <div>
  <Navbar />
  <Home />
  <RegisterPage />
  <Footer />
  </div>
  );
 */ };
  

 function App() {
  // Estado para manejar vistas
  const [currentView, setCurrentView] = useState('home'); 

  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <Login onBackToHome={() => setCurrentView('home')} />;
      case 'register':
        return <Register onBackToHome={() => setCurrentView('home')} />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <Navbar
        onLoginClick={() => setCurrentView('login')}
        onRegisterClick={() => setCurrentView('register')}
        onHomeClick={() => setCurrentView('home')}
      />
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;