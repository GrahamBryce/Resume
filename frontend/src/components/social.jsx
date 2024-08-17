import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-router-dom";

const socials = [
  {icon: <FaGithub />, path: ''},
  {icon: <FaLinkedinIn />, path: ''},
]

const Social = ({containerStyles, iconStyles}) =>{
  return(
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social;