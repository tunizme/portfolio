import React from "react";
import { RiPencilRuler2Line } from "react-icons/ri";
const Education = () => {
  return (
    <div
      id="education"
      className="w-9/12 m-auto pt-40 pb-20 border-black dark:border-[--text-color-dark] border-b-[1px]"
    >
      <h1 className="text-center font-bold text-4xl">Education</h1>
      <p className="text-center font-normal text-sm text-[var(--text-color-desc)]">
        Where I Learn A Lot
      </p>
      <div className="flex items-center flex-col pt-20">
        <span className="flex items-center gap-4">
          <img src="../assets/img/dut.jpg" alt="" width={40} />
          <p className="text-xl font-semibold">
            Danang University of Science and Technology
          </p>
        </span>
        <span className="flex gap-3 items-center pt-3">
          <RiPencilRuler2Line />
          <p className="text-lg font-medium">Computer Engineer</p>
        </span>
        <p className="text-[var(--text-color-desc)] text-sm font-normal">
          2021 - present
        </p>
      </div>
    </div>
  );
};

export default Education;