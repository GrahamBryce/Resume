import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/GrahamBryce' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/bryce-graham-8a5434242/' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
