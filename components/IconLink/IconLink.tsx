import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface IconLinkProps {
  link: string;
  Icon: IconType;
  color: string;
}

const IconLink: React.FC<IconLinkProps> = ({ link, Icon, color }) => {
  return (
    <Link href={link}>
      <Icon size={24} className={color} />
    </Link>
  );
};

export default IconLink;
