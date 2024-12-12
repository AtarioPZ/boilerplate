import React, { ReactNode } from "react";

interface CustomSectionProps {
  className?: string;
  children?: ReactNode;
}

const CustomSection: React.FC<CustomSectionProps> = ({
  className = "",
  children,
}) => {
  return (
    <section className={`${className} max-w-[1560px] w-full flex px-2 md:px-4`}>
      {children}
    </section>
  );
};

export default CustomSection;
