import React, { useState } from "react";
import styles from "./styles.css";
import { Link, useNavigate } from "react-router-dom";

import { Menu } from "antd";
import {
  SmileOutlined,
  GlobalOutlined,
  FileSearchOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Menú", "sub1", null, [
    getItem("Carrito", "enrutarUsuario/signin", <SmileOutlined />),
    getItem("Cuenta", "otraspruebas", <FileSearchOutlined />),
  ]),
];

function NavBar2() {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();

  const cambiarComponent = e => {
    setCurrent(e.key);
    navigate(`${e.key}`);
  };
  return (
    <>
      <div className="logoPrincipal">
        <Link to="/">
          <img
            alt="Pharmahogar"
            src={
              "https://imagenesrutalab.s3.amazonaws.com/pharmahogar/PharmahogarBlanconombre.png"
            }
            width="175px"
            height="auto"
          />
        </Link>
      </div>
      <Menu
        selectedKeys={current}
        onClick={cambiarComponent}
        mode="horizontal"
        items={items}
        className="menuPrincipal"
        style={{ minWidth: 100, color: "white" }}
      />
    </>
  );
}

export default NavBar2;
