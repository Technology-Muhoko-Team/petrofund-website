"use client";

import React from "react";

interface ManagementHeaderProps {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  title2?: string;
}

const ManagementHeader: React.FC<ManagementHeaderProps> = ({
  title,
  subtitle,
  subtitle2,
  title2,
}) => {
  return (
    <header className="  py-8 px-6 rounded-b-3xl shadow-md">
      <div className="max-w-5xl mx-auto text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h1>
        {subtitle && (
          <>
            <p className="text-md sm:text-lg text-justify">{subtitle}</p>
            <br />
          </>
        )}
        {subtitle2 && (
          <>
            <h1 className="text-lg sm:text-4xl font-bold mb-2">{title2}</h1>
            <p className="text-md sm:text-lg text-justify">{subtitle2}</p>
          </>
        )}
      </div>
    </header>
  );
};

export default ManagementHeader;
