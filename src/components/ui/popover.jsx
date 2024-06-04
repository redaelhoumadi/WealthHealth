// Importation de PropTypes pour valider les types de props
import PropTypes from "prop-types";
// Importation des composants nécessaires depuis React et Radix UI
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
// Importation de la fonction utilitaire 'cn' depuis le fichier utils
import { cn } from "../../lib/utils";

// Définition du composant Popover pour encapsuler le contenu du popover
const Popover = PopoverPrimitive.Root;

// Définition du composant PopoverTrigger pour activer l'affichage du popover
const PopoverTrigger = PopoverPrimitive.Trigger;

// Définition du composant PopoverContent pour le contenu du popover
const PopoverContent = React.forwardRef(
  // Utilisation de React.forwardRef pour transmettre la référence
  (
    { className, align = "center", sideOffset = 4, ...props },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      {/* Contenu du popover */}
      <PopoverPrimitive.Content
        ref={ref} // Transmission de la référence
        align={align} // Alignement du popover par défaut
        sideOffset={sideOffset} // Décalage par défaut du popover par rapport à son déclencheur
        className={cn(
          // Classes CSS du contenu du popover
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className // Classes CSS personnalisées
        )}
        {...props} // Transmission des autres props
      />
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName; // Définition du nom du composant pour le débogage

// Spécification des types de props attendus
PopoverContent.propTypes = {
  className: PropTypes.string.isRequired, // Classe CSS personnalisée
  align: PropTypes.string.isRequired, // Alignement du popover
  sideOffset: PropTypes.number.isRequired, // Décalage du popover par rapport à son déclencheur
};

// Exportation des composants Popover, PopoverTrigger et PopoverContent
export { Popover, PopoverTrigger, PopoverContent };
