import PropTypes from "prop-types";

const TextInput = ({ type, name, label, register, error }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label
        className="text-[15px] text-dark font-semibold"
        htmlFor={String(name)}
      >
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        id={String(name)}
        className="p-3 outline-none text-dark/80 font-normal rounded-md border border-gray-300 w-full text-base focus:border-brand hover:border-brand duration-200 ease-in"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default TextInput;
