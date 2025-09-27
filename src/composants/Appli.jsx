import React, { useState, useEffect } from "react";
import SaisieTache from "./SaisieTache";
import ListeTaches from "./ListeTaches";
import FiltreTaches from "./FiltreTaches";
import TachesActives from "./TachesActives";
import SupprimeTaches from "./SupprimeTaches";

import './Appli.scss';

const Appli = () => {
  const [listeTaches, setListeTaches] = useState(() => {
    const tachesSauvegardees = localStorage.getItem("taches");
    return tachesSauvegardees ? JSON.parse(tachesSauvegardees) : [];
  });

  const [filtreActuel, setFiltreActuel] = useState("toutes");

  useEffect(() => {
    localStorage.setItem("taches", JSON.stringify(listeTaches));
  }, [listeTaches]);

  const ajouterNouvelleTache = (contenuTache) => {
    const nouvelleTache = {
      id: Date.now(),
      texte: contenuTache,
      dateAjout: new Date().toLocaleString(),
      estCompletee: false,
    };
    setListeTaches([nouvelleTache, ...listeTaches]);
  };

  const basculerStatutTache = (idTache) => {
    setListeTaches(
      listeTaches.map((tache) =>
        tache.id === idTache ? { ...tache, estCompletee: !tache.estCompletee } : tache
      )
    );
  };

  const supprimerTache = (idTache) => {
    setListeTaches(listeTaches.filter((tache) => tache.id !== idTache));
  };

  const supprimerToutesTachesCompletees = () => {
    setListeTaches(listeTaches.filter((tache) => !tache.estCompletee));
  };


  return (
    <div className="appli">
      <h1 className="titre">Mémo</h1>
      <SaisieTache onAjouter={ajouterNouvelleTache} />
      <FiltreTaches filtre={filtreActuel} setFiltre={setFiltreActuel} />
      <TachesActives listeTaches={listeTaches} />
      <ListeTaches
        listeTaches={listeTaches}
        filtre={filtreActuel}
        onChangerStatut={basculerStatutTache}
        onSupprimer={supprimerTache}
      />
      
      <SupprimeTaches onSupprimerToutes={supprimerToutesTachesCompletees} />
    </div>
  );
};

export default Appli;
