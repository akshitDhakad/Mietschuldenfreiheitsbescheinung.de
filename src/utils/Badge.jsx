import PropTypes from "prop-types";

function Badge({ icon, title }) {
  return (
    <h6 className="bg-secondary-green border border-[#0248470F] text-sm lg:text-lg 2xl:text-2xl text-primary-green px-2 lg:px-4 py-2.5 inline-flex items-center gap-x-3 leading-normal lg:leading-wide">
      {icon}
      {title}
    </h6>
  );
}

Badge.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
};

export default Badge;
