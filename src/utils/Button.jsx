import { FaArrowRightLong } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import PropTypes from "prop-types";

const Button1 = ({ title, textCss, iconCss }) => (
  <button className="bg-primary-green text-white whitespace-nowrap hover:opacity-80 flex items-center justify-between">
    <div
      className={`${iconCss} text-primary-green bg-secondary-green px-4 py-2.5 lg:py-4`}
    >
      <BsPatchCheck className="size-6 2xl:size-8" />
    </div>
    <div
      className={`${textCss} font-medium flex-1 text-center px-4 py-2.5 lg:px-8 lg:py-3.5`}
    >
      {title}
    </div>
  </button>
);

Button1.propTypes = {
  title: PropTypes.string.isRequired,
  textCss: PropTypes.string,
  iconCss: PropTypes.string,
};

const Button2 = ({ title, maxWidth = "", textCss = "", iconCss = "" }) => {
  return (
    <button
      className={`${maxWidth} bg-primary-green text-white  whitespace-nowrap hover:opacity-80 flex items-center justify-between`}
    >
      <div
        className={`${textCss} font-medium flex-1 text-center px-4 py-2 lg:px-8 lg:py-5`}
      >
        {title}
      </div>
      <div className={`${iconCss} bg-[#CBEADF] p-3 lg:p-6`}>
        <FaArrowRightLong />
      </div>
    </button>
  );
};

Button2.propTypes = {
  title: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
  textCss: PropTypes.string,
  iconCss: PropTypes.string,
};

const Button3 = ({ title, textCss, iconCss, maxWidth }) => {
  return (
    <button
      className={`w-full ${maxWidth} bg-secondary-green whitespace-nowrap hover:opacity-80 flex items-center justify-between`}
    >
      <div
        className={`${textCss} text-primary-green font-medium flex-1 text-center px-4 py-2 lg:px-8 lg:py-5`}
      >
        {title}
      </div>

      <div className={`${iconCss} bg-primary-green text-white p-3 lg:p-6`}>
        <HiOutlineDocumentDownload />
      </div>
    </button>
  );
};

Button3.propTypes = {
  title: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
  textCss: PropTypes.string,
  iconCss: PropTypes.string,
};

export { Button1, Button2, Button3 };
