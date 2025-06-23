import { FaArrowRightLong } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import { HiOutlineDocumentDownload } from "react-icons/hi";

interface Button1Props {
  title: string;
  textCss?: string;
  iconCss?: string;
}

const Button1 = ({ title, textCss, iconCss }: Button1Props): JSX.Element => (
  <button className="bg-primary-green text-white whitespace-nowrap hover:opacity-80 flex items-center justify-between">
    <div
      className={`${iconCss} text-primary-green bg-secondary-green px-4 py-2.5 lg:py-4`}
    >
      <BsPatchCheck className="size-6 2xl:size-8" />
    </div>
    <div
      className={`${textCss} font-medium flex-1 text-center px-4 py-2.5 lg:px-8 lg:py-5`}
    >
      {title}
    </div>
  </button>
);

interface Button2Props {
  title: string;
  maxWidth?: string;
  textCss?: string;
  iconCss?: string;
}

const Button2 = ({
  title,
  maxWidth = "",
  textCss = "",
  iconCss = "",
}: Button2Props): JSX.Element => {
  return (
    <button
      className={`${maxWidth} bg-primary-green text-white whitespace-nowrap hover:opacity-80 flex items-center justify-between`}
    >
      <div
        className={`${textCss} font-medium flex-1 text-center px-4 py-2 lg:px-8 lg:py-4`}
      >
        {title}
      </div>
      <div
        className={`${iconCss} bg-secondary-green text-primary-green p-3 lg:p-5`}
      >
        <FaArrowRightLong />
      </div>
    </button>
  );
};

interface Button3Props {
  title: string;
  maxWidth?: string;
  textCss?: string;
  iconCss?: string;
}

const Button3 = ({
  title,
  textCss,
  iconCss,
  maxWidth,
}: Button3Props): JSX.Element => {
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

export { Button1, Button2, Button3 };
