import './TachesActives.scss';

const TachesActives = ({ listeTaches }) => {
  const nombreTachesActives = listeTaches.filter((tache) => !tache.estCompletee).length;

  return (
    <p className="taches-actives">
      TÂCHES ACTIVES : {nombreTachesActives}
    </p>
  );
};

export default TachesActives;
