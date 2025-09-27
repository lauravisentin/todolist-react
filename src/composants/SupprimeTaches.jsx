import './SupprimeTaches.scss';

const SupprimeTaches = ({ onSupprimerToutes }) => {
  return (
    <button className="btn-ajouter-supprimer" onClick={onSupprimerToutes}>
      Supprimer les tâches complétées
    </button>
  );
};

export default SupprimeTaches;
