import { useState } from "react";
import './SaisieTache.scss';


const SaisieTache = ({ onAjouter }) => {
  const [texteSaisi, setTexteSaisi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texteSaisi.trim() == "") return;
    onAjouter(texteSaisi);
    setTexteSaisi("");
  };

  return (
    <form className="form-ajout" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-ajout"
        value={texteSaisi}
        onChange={(e) => setTexteSaisi(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button type="submit" className="btn-ajouter-supprimer">Ajouter</button>
    </form>
  );
  
};

export default SaisieTache;
