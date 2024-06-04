// Importation des modules et composants nécessaires
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { zoomIn } from "../lib/variants";
import PropTypes from "prop-types";
import verifiedImage from "../assets/images/verified.png";

// Définition du composant Modal
const Modal = ({ handleToggleModal }) => {
  return (
    // motion.div extérieur pour l'arrière-plan, qui couvre tout l'écran
    <motion.div
      onClick={handleToggleModal} // Fermer la modal lorsque l'arrière-plan est cliqué
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-dark/20 overflow-y-hidden p-4"
      initial={{ opacity: 0 }} // État initial de l'arrière-plan
      animate={{ opacity: 1 }} // État d'animation lorsque la modal apparaît
      exit={{ opacity: 0 }} // État d'animation de sortie lorsque la modal disparaît
    >
      {/* motion.div intérieur pour le contenu de la modal */}
      <motion.div
        onClick={(e) => e.stopPropagation()} // Empêcher la fermeture de la modal en cliquant à l'intérieur du contenu de la modal
        className="m-auto md:px-16 px-10 py-8 rounded-lg bg-white"
        variants={zoomIn} // Variants d'animation pour le contenu de la modal
        initial="hidden" // État initial pour le contenu
        animate="visible" // État d'animation lorsque la modal apparaît
        exit="exit" // État d'animation de sortie lorsque la modal disparaît
      >
        {/* Contenu de la modal */}
        <div className="flex flex-col items-center gap-3">
          {/* Image vérifiée */}
          <img
            src={verifiedImage}
            alt="verified"
            className="size-28 object-cover"
          />
          {/* Message de succès */}
          <h2 className="text-dark text-center text-xl font-medium pb-4">
            Employé créé avec succès
          </h2>
          {/* Lien vers tous les employés */}
          <Link
            to="/employees"
            className="px-16 py-3 rounded-lg bg-brand text-white font-medium"
          >
            Tous les employés
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Définition des PropTypes pour le composant Modal
Modal.propTypes = {
  handleToggleModal: PropTypes.func.isRequired, // S'assurer que handleToggleModal est une fonction requise
};

// Exportation du composant Modal par défaut
export default Modal;
