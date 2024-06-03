import { z } from "zod";
import { parseISO, isDate, isValid } from "date-fns";

const dateValidation = z.preprocess((arg) => {
  if (typeof arg === "string") {
    const parsedDate = parseISO(arg);
    return isValid(parsedDate) ? parsedDate : null;
  }
  return arg;
}, z.date().refine(isDate, { message: "Invalid date" }));

export const formSchema = z.object({
  firstName: z.string().trim().min(2, { message: "First name is required" }),
  lastName: z.string().trim().min(2, { message: "Last name is required" }),
  dateOfBirth: z.union([
    dateValidation,
    z.string().min(1, { message: "Date of birth is required" }),
  ]),
  startDate: z.union([
    dateValidation,
    z.string().min(1, { message: "Start Date is required" }),
  ]),
  street: z.string().trim().min(2, { message: "Street is required" }),
  city: z.string().trim().min(2, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string().trim().min(2, { message: "Zip code is required" }),
  department: z.string().trim().min(1, { message: "Departments is required" }),
});
