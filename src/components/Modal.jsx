// import verifiedImage from "../assets/images/verified.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { zoomIn } from "../lib/variants";
import PropTypes from "prop-types";
import verifiedImage from "../assets/images/verified.png";

const Modal = ({ handleToggleModal }) => {
  return (
    <motion.div
      onClick={handleToggleModal}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-dark/20 overflow-y-hidden p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="m-auto md:px-16 px-10 py-8 rounded-lg bg-white"
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-col items-center gap-3">
          <img
            src={verifiedImage}
            alt="verified"
            className="size-28 object-cover"
          />
          <h2 className="text-dark text-center text-xl font-medium pb-4">
            Employee created successfully
          </h2>
          <Link
            to="/employees"
            className="px-16 py-3 rounded-lg bg-brand text-white font-medium"
          >
            All Employees
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

Modal.propTypes = {
  handleToggleModal: PropTypes.bool.isRequired,
};

export default Modal;
