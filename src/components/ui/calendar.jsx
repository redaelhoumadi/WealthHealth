// Importation du hook pour manipuler les données du client
"use client";

// Importation des bibliothèques et composants nécessaires depuis React, DayPicker et des icônes Lucide React
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

// Importation de la fonction utilitaire 'cn' depuis le fichier utils
import { cn } from "../../lib/utils";
// Importation de la fonction 'buttonVariants' depuis le composant Button
import { buttonVariants } from "../ui/button";

// Définition du composant Calendar pour afficher un calendrier
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    // Utilisation du composant DayPicker pour créer le calendrier
    <DayPicker
      showOutsideDays={showOutsideDays} // Prop pour afficher ou masquer les jours en dehors du mois
      className={cn("p-3", className)} // Classes CSS du composant DayPicker avec une classe supplémentaire personnalisée
      classNames={{
        // Définition des classes CSS personnalisées pour styliser le calendrier
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }), // Utilisation de la fonction 'buttonVariants' pour définir le style des boutons de navigation
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }), // Utilisation de la fonction 'buttonVariants' pour définir le style des jours du calendrier
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames, // Incorporation de classes CSS personnalisées
      }}
      components={{
        // Personnalisation des icônes de navigation du calendrier
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props} // Transmission des autres props
    />
  );
}

// Spécification des types de props attendues
Calendar.propTypes = {
  className: PropTypes.string.isRequired, // Classe CSS personnalisée pour le composant
  classNames: PropTypes.string.isRequired, // Classes CSS personnalisées pour styliser le calendrier
  showOutsideDays: PropTypes.bool.isRequired, // Prop pour afficher ou masquer les jours en dehors du mois
};

// Exportation du composant Calendar
export { Calendar };
