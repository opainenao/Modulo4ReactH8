import React from "react";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { logout } = useUser();

  return (
    <div className="text-center mt-5">
      <h2>Perfil del Usuario</h2>
      <p>Email: usuario@desafiolatam.com</p>
      <button className="btn btn-danger" onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;

