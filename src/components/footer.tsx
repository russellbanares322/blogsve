import React from "react";

const Footer = () => {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <div className="border-t py-3 flex items-center justify-center">{`All rights reserved ${currentYear}`}</div>
  );
};

export default Footer;
