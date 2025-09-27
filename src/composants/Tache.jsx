import React from "react";
import './Tache.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Tache = ({ infosTache, onChangerStatut, onSupprimer }) => {
  return (
    <li className={`tache ${infosTache.estCompletee ? "completee" : ""}`}>
      <button className="btn-checkbox" onClick={() => onChangerStatut(infosTache.id)}>
          {infosTache.estCompletee ? "✔" : ""}
      </button>
      <div className="tache-contenu">
        <span className="tache-texte">{infosTache.texte}</span>
        <span className="tache-date">{infosTache.dateAjout}</span>
      </div>
      <button className="btn-supprimer" onClick={() => onSupprimer(infosTache.id)}>
        <DeleteOutlineIcon className="icone-poubelle" />
      </button>
    </li>
  );
};

export default Tache;
