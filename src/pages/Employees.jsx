import useLocalStorage from "../../hooks/useLocalStorage";
import { columns } from "../components/employees/Columns";
import { DataTable } from "../components/employees/DataTable";

const Employees = () => {
  const [employees, setEmployees] = useLocalStorage("employees", []);

  return (
    <div className="bg-gray-50/50 py-8 lg:px-10 md:px-8 px-4">
      <div className="bg-white rounded-lg md:p-6 p-4  shadow-lg shadow-gray-50">
        <h1 className="text-dark md:text-2xl text-xl font-bold text-center mb-3">
          Current Employees
        </h1>
        <DataTable columns={columns} data={employees} />
      </div>
    </div>
  );
};

export default Employees;
