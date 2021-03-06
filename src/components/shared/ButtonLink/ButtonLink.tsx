import React, { ReactElement } from 'react';

type Props = {
  label: string;
  href: string;
};

const ButtonLink = ({ label, href }: Props): ReactElement => {
  return (
    <a
      data-testid="buttonlink"
      className="rounded-full shadow-lg bg-red-400 hover:bg-red-500 py-4 px-6 text-white text-xl"
      data-aos-delay="300"
      data-aos="fade-right"
      href={href}
      rel="noopener noreferrer"
      target="_blank">
      {label}
    </a>
  );
};

export default ButtonLink;
