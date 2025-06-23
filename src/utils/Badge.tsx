import { ReactElement } from "react";

interface BadgeProps {
  icon: ReactElement;
  title: string;
}

function Badge({ icon, title }: BadgeProps): JSX.Element {
  return (
    <h6 className="bg-secondary-green border border-[#0248470F] text-sm lg:text-lg 2xl:text-2xl text-primary-green px-2 lg:px-4 py-2.5 inline-flex items-center gap-x-3 leading-normal lg:leading-wide">
      {icon}
      {title}
    </h6>
  );
}

export default Badge;
