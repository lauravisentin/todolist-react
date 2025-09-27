import Tache from "./Tache";

import './ListeTaches.scss';

const ListeTaches = ({ listeTaches, filtre, onChangerStatut, onSupprimer }) => {
  const filtrerTaches = () => {
    if (filtre == "actives") return listeTaches.filter((tache) => !tache.estCompletee);
    if (filtre == "completees") return listeTaches.filter((tache) => tache.estCompletee);
    return listeTaches;
  };

  return (
    <ul className="liste-taches">
      {filtrerTaches().map((tache) => (
        <Tache
          key={tache.id}
          infosTache={tache}
          onChangerStatut={onChangerStatut}
          onSupprimer={onSupprimer}
        />
      ))}
    </ul>
  );
};

export default ListeTaches;
