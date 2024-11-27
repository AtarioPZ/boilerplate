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
    <section className={`${className} max-w-[1560px] w-full flex`}>
      {children}
    </section>
  );
};

export default CustomSection;
