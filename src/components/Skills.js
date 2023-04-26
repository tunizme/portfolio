import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="md:w-9/12 w-11/12 m-auto md:pt-40 pt-[80px] pb-40 border-[var(--border-color)] border-b-[1px]"
    >
      <h1 className="text-center font-bold text-4xl">Skills</h1>
      <p className="text-center font-normal text-sm text-[var(--text-color-desc)]">
        What I Can Do
      </p>
      <div className="flex items-center justify-center pt-20">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-20">
          <div className="flex flex-col justify-center w-[104px] items-center gap-3">
            <span className="w-[84px] h-[106px] flex items-center justify-center rounded-full bg-[#f2f2f3] dark:bg-[var(--container-color)] duration-500 ease-in-out transition-all">
              <img src="../assets/img/html.png" alt="" width={50} />
            </span>
            <span className="text-center ">
              <p className="font-medium">HTML</p>
              <p className="text-[var(--text-color-desc)] text-xs font-normal">
                Intermediate
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center w-[104px] items-center gap-3">
            <span className="w-[84px] h-[106px] flex items-center justify-center rounded-full bg-[#f2f2f3] dark:bg-[var(--container-color)] duration-500 ease-in-out transition-all">
              <img src="../assets/img/css.png" alt="" width={50} />
            </span>
            <span className="text-center">
              <p className="font-medium">CSS</p>
              <p className="text-[var(--text-color-desc)] text-xs font-normal">
                Intermediate
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center w-[104px] items-center gap-3">
            <span className="w-[84px] h-[106px] flex items-center justify-center rounded-full bg-[#f2f2f3] dark:bg-[var(--container-color)] duration-500 ease-in-out transition-all">
              <img src="../assets/img/javascript.png" alt="" width={50} />
            </span>
            <span className="text-center">
              <p className="font-medium">JavaScript</p>
              <p className="text-[var(--text-color-desc)] text-xs font-normal">
                Intermediate
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center w-[104px] items-center gap-3">
            <span className="w-[84px] h-[106px] flex items-center justify-center rounded-full bg-[#f2f2f3] dark:bg-[var(--container-color)] duration-500 ease-in-out transition-all">
              <img src="../assets/img/react.png" alt="" width={50} />
            </span>
            <span className="text-center">
              <p className="font-medium">React</p>
              <p className="text-[var(--text-color-desc)] text-xs font-normal">
                Basic
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center w-[104px] items-center gap-3">
            <span className="w-[84px] h-[106px] flex items-center justify-center rounded-full bg-[#f2f2f3] dark:bg-[var(--container-color)] duration-500 ease-in-out transition-all">
              <img src="../assets/img/bootstrap.png" alt="" width={50} />
            </span>
            <span className="text-center">
              <p className="font-medium">Bootstrap</p>
              <p className="text-[var(--text-color-desc)] text-xs font-normal">
                Intermediate
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center w-[104px] items-center gap-3">
            <span className="w-[84px] h-[106px] flex items-center justify-center rounded-full bg-[#f2f2f3] dark:bg-[var(--container-color)] duration-500 ease-in-out transition-all">
              <img src="../assets/img/tailwind.png" alt="" width={50} />
            </span>
            <span className="text-center">
              <p className="font-medium">Tailwind CSS</p>
              <p className="text-[var(--text-color-desc)] text-xs font-normal">
                Intermediate
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-center w-[104px] items-center gap-3">
            <span className="w-[84px] h-[106px] flex items-center justify-center rounded-full bg-[#f2f2f3] dark:bg-[var(--container-color)] duration-500 ease-in-out transition-all">
              <img
                src="../assets/img/github.png"
                alt=""
                className="bg-white rounded-full"
                width={50}
              />
            </span>
            <span className="text-center">
              <p className="font-medium">Github</p>
              <p className="text-[var(--text-color-desc)] text-xs font-normal">
                Basic
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
