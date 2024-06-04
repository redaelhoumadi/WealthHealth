// Importation du hook personnalisé pour gérer le stockage local
import useLocalStorage from "../../hooks/useLocalStorage";
// Importation des colonnes pour le tableau des employés
import { columns } from "../components/employees/Columns";
// Importation du composant DataTable
import { DataTable } from "../components/employees/DataTable";

const Employees = () => {
  // Utilisation du hook useLocalStorage pour récupérer et mettre à jour les employés dans le stockage local
  const [employees, setEmployees] = useLocalStorage("employees", []);

  return (
    // Conteneur principal avec une légère opacité de fond gris
    <div className="bg-gray-50/50 py-8 lg:px-10 md:px-8 px-4">
      {/* Conteneur pour la carte blanche */}
      <div className="bg-white rounded-lg md:p-6 p-4 shadow-lg shadow-gray-50">
        {/* Titre de la section */}
        <h1 className="text-dark md:text-2xl text-xl font-bold text-center mb-3">
          Employés actuels
        </h1>
        {/* Composant DataTable pour afficher les données des employés */}
        <DataTable columns={columns} data={employees} />
      </div>
    </div>
  );
};

// Exportation du composant Employees par défaut
export default Employees;
