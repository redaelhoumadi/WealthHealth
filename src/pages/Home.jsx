// React
import { useState, useCallback } from "react";

import { formSchema } from "../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextInput from "../components/ui/text-input";
import { departments, states } from "../lib/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Link } from "react-router-dom";
import { formatISO } from "date-fns";
import DatePicker from "../components/ui/date-picker";
import useLocalStorage from "../../hooks/useLocalStorage";
import Modal from "../components/Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const [employees, setEmployees] = useLocalStorage("employees", []);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);

  // handle modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // set up hook form
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      state: "",
      department: "",
      street: "",
      city: "",
      zipCode: "",
    },
  });

  const handleDateOfBirthChange = useCallback(
    (selectedDate) => {
      setDateOfBirth(selectedDate);
      setValue("dateOfBirth", formatISO(selectedDate), {
        shouldValidate: true,
      });
    },
    [setValue]
  );

  const handleStartDateChange = useCallback(
    (selectedDate) => {
      setStartDate(selectedDate);
      setValue("startDate", formatISO(selectedDate), { shouldValidate: true });
    },
    [setValue]
  );

  const handleStateChange = useCallback(
    (selectedState) => {
      setValue("state", selectedState, { shouldValidate: true });
    },
    [setValue]
  );

  const handleDepartmentChange = useCallback(
    (selectedDepartment) => {
      setValue("department", selectedDepartment, { shouldValidate: true });
    },
    [setValue]
  );

  // handle submit form
  const onSubmit = async (data) => {
    setEmployees((prev) => [...prev, data]);
    handleToggleModal();
  };

  return (
    <div className="bg-gray-50/50 md:p-8 p-4">
      <div className="lg:w-[55%] w-full bg-white shadow-lg shadow-gray-50 m-auto md:p-6 p-4 rounded-lg">
        <div className="flex justify-between items-center border-b border-dark/5 py-4">
          <h1 className="text-dark md:text-2xl text-xl font-bold">HRnet</h1>
          <Link to="/employees" className="text-brand underline">
            View Current Employees
          </Link>
        </div>

        <div>
          <h2 className="text-dark text-center md:text-2xl text-xl font-semibold mt-4 mb-3">
            Create Employee
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextInput
              register={register}
              error={errors.firstName}
              type="text"
              name="firstName"
              label="First Name"
            />

            <TextInput
              register={register}
              error={errors.lastName}
              type="text"
              name="lastName"
              label="Last Name"
            />

            <DatePicker
              handleDateChange={handleDateOfBirthChange}
              date={dateOfBirth}
              error={errors.dateOfBirth}
              label="Date of Birth"
            />

            <DatePicker
              handleDateChange={handleStartDateChange}
              date={startDate}
              error={errors.startDate}
              label="Start Date"
            />

            <fieldset className="border border-gray-300 p-4 rounded-md space-y-3">
              <legend className="text-[15px] text-dark font-semibold px-4">
                Address
              </legend>

              <TextInput
                register={register}
                error={errors.street}
                type="text"
                name="street"
                label="Street"
              />

              <TextInput
                register={register}
                error={errors.city}
                type="text"
                name="city"
                label="City"
              />

              <div>
                <label className="text-[15px] text-dark font-semibold block pb-1">
                  State
                </label>
                <Select onValueChange={handleStateChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {states.map((el) => (
                        <SelectItem key={el.value} value={el.value}>
                          {el.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.state.message}
                  </p>
                )}
              </div>

              <TextInput
                register={register}
                error={errors.zipCode}
                type="number"
                name="zipCode"
                label="Zip Code"
              />
            </fieldset>

            <div>
              <label className="text-[15px] text-dark font-semibold block pb-1">
                Departments
              </label>
              <Select onValueChange={handleDepartmentChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {departments.map((el) => (
                      <SelectItem key={el.value} value={el.value}>
                        {el.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.department && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.department.message}
                </p>
              )}
            </div>

            <div className="flex items-end justify-end">
              <button className="px-16 py-3 rounded-lg bg-brand text-white font-medium">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && <Modal handleToggleModal={handleToggleModal} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
