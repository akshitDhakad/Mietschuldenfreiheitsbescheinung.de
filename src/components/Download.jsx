import { Link } from "react-router-dom";
import { Button3 } from "../utils/Button";
import PropTypes from "prop-types";

function Download({ title, description, link, buttonTitle }) {
  return (
    <section className="relative overflow-hidden bg-secondary-green bg-[url('/banner/nutze.png')] bg-cover bg-no-repeat bg-center">
      <div className="lg:h-[500px] 2xl:h-[610px] h-full w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl m-auto px-4 2xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="absolute top-0 left-0 z-0 rotate-90 lg:rotate-0">
          <img
            loading="lazy"
            src="/banner/nutze-circle-1.png"
            alt="nutze"
            className="w-full "
          />
        </div>
        {/* Right side image */}
        <div className="absolute bottom-0 lg:top-0 right-0 z-0">
          <img
            src="/banner/nutze-circle-2.png"
            alt="nutze"
            className="w-full "
          />
        </div>
        {/* Left Content */}
        <div className="lg:max-w-[38rem] 2xl:max-w-[45rem] space-y-6 text-white z-10 py-10">
          <h2 className="text-primary-green text-4xl lg:text-5xl 2xl:text-6xl font-normal leading-norma lg:leading-66 2xl:leading-70">
            {title}
          </h2>
          <p className="text-secondary-black text-lg lg:text-xl 2xl:text-2xl leading-normal lg:leading-wide lg:leading-32 2xl:leading-45">
            {description}
          </p>
          <Link
            to={link}
            className="inline-block mt-10 w-full max-w-xs 2xl:max-w-sm"
          >
            <Button3
              title={buttonTitle}
              maxWidth={"max-w-min mr-auto"}
              textCss={"2xl:text-2xl border border-primary-green"}
              iconCss={"2xl:text-2xl border border-primary-green"}
            />
          </Link>
        </div>
        <div className="bottom-0 z-10 h-[400px]">
          {/* Image 1 */}
          <div className="absolute right-8 xl:right-32 2xl:right-48 bottom-0">
            <img
              loading="lazy"
              src="/img/template-1.png"
              alt="template 1"
              className="h-[345px] lg:h-[450px] 2xl:h-[600px] object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute -right-24 lg:right-0 bottom-0">
            <img
              loading="lazy"
              src="/img/template-2.png"
              alt="template 2"
              className="h-[300px] lg:h-[375px] 2xl:h-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Download.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default Download;
