import React from "react";
import { RiPencilRuler2Line } from "react-icons/ri";
const Education = () => {
  return (
    <div
      id="education"
      className="md:w-9/12 w-11/12 m-auto md:pt-40 pt-[80px] pb-40 border-[var(--border-color)] border-b-[1px]"
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
