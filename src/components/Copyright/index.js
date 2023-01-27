import React from "react";
import "./styles.css";

export default function Copyright() {
  return (
    <div className="d-flex flex-column copyright">
      <div className="m-3">
        <p style={{ color: "#333", fontWeight: 200 }}>Pharmahogar COPYRIGHT</p>
        <p style={{ color: "#333", fontWeight: 200 }}>
          Farmacia que se preocupa por ti
        </p>
      </div>
    </div>
  );
}
