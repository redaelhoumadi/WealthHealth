// Importations des bibliothèques et composants nécessaires
import { IoCalendarOutline } from "react-icons/io5"; // Icône pour le bouton de calendrier
import { Calendar } from "../../components/ui/calendar"; // Composant de calendrier personnalisé
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"; // Composants de popover pour afficher le calendrier
import { format } from "date-fns"; // Fonction de formatage de la date
import { cn } from "../../lib/utils"; // Fonction utilitaire pour concaténer les classes CSS
import PropTypes from "prop-types"; // Importation de PropTypes pour valider les types de props

// Définition du composant DatePicker pour sélectionner une date
const DatePicker = ({ date, handleDateChange, error, label }) => {
  return (
    <div>
      {/* Label du champ de date */}
      <label className="text-[15px] text-dark font-semibold block pb-1">
        {label}
      </label>
      {/* Popover pour afficher le calendrier */}
      <Popover>
        <PopoverTrigger asChild>
          {/* Bouton pour ouvrir le calendrier */}
          <button
            className={cn(
              // Classes CSS du bouton de sélection de date
              "w-full justify-start text-dark/80 text-left font-normal border border-gray-300 rounded-md flex items-center p-3",
              !date && "text-muted-foreground" // Style pour la date non sélectionnée
            )}
          >
            <IoCalendarOutline className="text-xl mr-2" /> {/* Icône de calendrier */}
            {date ? format(date, "PPP") : <span>Date of Birth</span>} {/* Texte de la date sélectionnée ou "Date of Birth" par défaut */}
          </button>
        </PopoverTrigger>
        {/* Contenu du Popover avec le calendrier */}
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange} // Gestionnaire de changement de date
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Affichage du message d'erreur */}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

// Spécification des types de props attendues
DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date), // Date sélectionnée
  label: PropTypes.string.isRequired, // Libellé du champ de date
  handleDateChange: PropTypes.func.isRequired, // Gestionnaire de changement de date
  error: PropTypes.object, // Erreur de validation éventuelle
};

// Exportation du composant DatePicker
export default DatePicker;
