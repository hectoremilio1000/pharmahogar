import React from "react";
import { HashLink } from "react-router-hash-link";
import "./styles.css";

function FooterComponent() {
  return (
    <div className="font-small pt-2 footer">
      <div
        className="grid grid-cols-1
      "
      >
        <div className="grid grid-cols-2">
          <div>
            <h5 className=" atrevete_footer pl-5">Solicita con un click</h5>
            <p className=" descripcion_footer pl-5">
              Farmacia a domicilio que piensa en Ti y en tu Salud
            </p>
          </div>
          <div className="grid grid-cols-1 text-center">
            <h5 className=" text-center titleLink">Links</h5>
            <ul className="ulFooter">
              <HashLink to="/#home" className="text-decoration-none">
                <li className="text-center list-unstyled linkText">Inicio</li>
              </HashLink>

              <a href="/admin2" className="text-decoration-none">
                <li className="text-center text-white list-unstyled linkText">
                  Administrador
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
