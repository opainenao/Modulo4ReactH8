/*import React, { useState } from 'react';
import { useUser } from "../context/UserContext";

const Register = ({ onBackToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //const [message, setMessage] = useState('');
  const { register } = useUser();

    

  //const handleRegister = (e) => {
    const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
    } else if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
    } else {
      alert('Registro exitoso.');
      await register(email, password);
    }
    
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="bg-white p-5 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">Registro</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmar Password:</label>
            <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-100 mb-3">Registrar</button>
          <button type="button" className="btn btn-secondary w-100" onClick={onBackToHome}>Volver al Home</button>
        </form>
      </div>
    </div>
  );
  };
  
  export default Register;*/

  /*return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="bg-white p-5 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">Registro</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese contraseña"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmar Password:</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme contraseña"
              required
            />
          </div>
          <button className="btn btn-primary w-100 mb-3">Registrar</button>
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={onBackToHome}
          >
            Volver al Home
          </button>
        </form>
        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
    </div>
  );
};
*/


import { useUser } from "../context/UserContext"; // Importa useUser


const Register = () => {
  const { login } = useUser();

  const handleRegister = () => {
    // Simulación de registro exitoso
    login("token_de_prueba", "usuario@correo.com");
  };

  return (
    <div>
      <h2>Registro</h2>
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Register;
