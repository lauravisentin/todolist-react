import React from "react";
import './FiltreTaches.scss';

const FiltreTaches = ({ filtre, setFiltre }) => {
  return (
    <div className="filtre-taches">
      <button onClick={() => setFiltre("toutes")} className={filtre === "toutes" ? "actif" : ""}>
        Toutes
      </button>
      <button onClick={() => setFiltre("actives")} className={filtre === "actives" ? "actif" : ""}>
        Actives
      </button>
      <button onClick={() => setFiltre("completees")} className={filtre === "completees" ? "actif" : ""}>
        Complétées
      </button>
    </div>
  );
};

export default FiltreTaches;
