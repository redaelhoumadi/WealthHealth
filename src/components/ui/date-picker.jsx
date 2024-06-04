import { IoCalendarOutline } from "react-icons/io5";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { format } from "date-fns";
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";

const DatePicker = ({ date, handleDateChange, error, label }) => {
  return (
    <div>
      <label className="text-[15px] text-dark font-semibold block pb-1">
        {label}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "w-full justify-start text-dark/80 text-left font-normal border border-gray-300 rounded-md flex items-center p-3",
              !date && "text-muted-foreground"
            )}
          >
            <IoCalendarOutline className="text-xl mr-2" />
            {date ? format(date, "PPP") : <span>Date of Birth</span>}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

DatePicker.propTypes = {
  date: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleDateChange: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default DatePicker;
