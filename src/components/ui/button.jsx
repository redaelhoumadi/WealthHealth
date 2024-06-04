// Importations des bibliothèques et des composants nécessaires depuis React et Radix UI
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority"; // Importation de la fonction pour gérer les variantes de classe CSS
import PropTypes from "prop-types";
import { cn } from "../../lib/utils"; // Fonction utilitaire pour concaténer les classes CSS

// Définition des variantes de bouton avec la fonction cva
const buttonVariants = cva(
  // Définition des classes de base du bouton avec des variantes pour chaque état
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    // Définition des variantes pour le style, la taille, etc.
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    // Définition des variantes par défaut
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Définition du composant Button avec des props personnalisées
const Button = React.forwardRef(
  // Utilisation de React.forwardRef pour transmettre la référence
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Détermination du type de composant à utiliser (Slot ou bouton) en fonction de la prop 'asChild'
    const Comp = asChild ? Slot : "button";
    // Rendu du composant avec les classes CSS appropriées
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref} // Transmission de la référence
        {...props} // Transmission des autres props
      />
    );
  }
);
Button.displayName = "Button"; // Définition du nom du composant pour le débogage

// Spécification des types de props attendus
Button.propTypes = {
  className: PropTypes.string.isRequired, // Classe CSS personnalisée
  variant: PropTypes.string.isRequired, // Variante de style du bouton
  size: PropTypes.string.isRequired, // Taille du bouton
  asChild: PropTypes.string.isRequired, // Type de composant à utiliser (Slot ou bouton)
};

// Exportation du composant Button et de la fonction buttonVariants
export { Button, buttonVariants };
