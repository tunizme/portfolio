import React, { useState } from "react";
import { BsArrowBarRight } from "react-icons/bs";
import Modal from "./Modal";
const Project = () => {
  const [modal, setModal] = useState(false);
  const [desc, setDesc] = useState("");
  const [isDemo, setIsDemo] = useState(false);
  function handleModal(id) {
    setModal(true);
    if (id === "demo") setIsDemo(true);
    else setDesc(projects[id]);
    document.body.style.overflow = "hidden";
  }
  const handleClose = () => {
    setModal(false);
    setIsDemo(false);
    document.body.style.overflow = "scroll";
  };
  const projects = [
    {
      title: "Lofi - Stay focused",
      target: "Có được một trang web giúp tập trung trong công việc.",
      steps:
        "Các bước triển khai dự án bao gồm lên cấu trúc của trang web, thiết kế giao diện trang web, lập trình, tối ưu trang web, fix bugs website",
      result:
        "Thành công khi đã áp dụng thành công kiến thức về lập trình web và có được một trang web đẹp mắt giúp tập trung trong công việc. Thất bại trong việc tối ưu hoá code bởi vì trình độ vẫn còn kém và cần học hỏi thêm nhiều thứ.",
      thoughts:
        "Khi triển khai dự án cần chú trọng việc thiết lập cấu trúc dự án, tránh việc sinh ra nhiều vấn đề cần giải quyết sau này",
    },
    {
      title: "To-Do List",
      target: "Có được một trang web giúp kiểm soát các công việc cần làm",
      steps:
        "Các bước triển khai dự án bao gồm lên cấu trúc của trang web, thiết kế giao diện trang web, lập trình, tối ưu trang web, fix bugs website",
      result:
        "Thành công khi đã áp dụng thành công kiến thức về lập trình web và có được một trang web tiện lợi cho việc kiểm soát các công việc cần làm. Thất bại trong việc tối ưu hoá code bởi vì trình độ vẫn còn kém và cần học hỏi thêm nhiều thứ.",
      thoughts:
        "Khi triển khai dự án cần chú trọng việc thiết lập cấu trúc dự án, tránh việc sinh ra nhiều vấn đề cần giải quyết sau này",
    },
    {
      title: "todo",
      target: "Có được một trang web giúp kiểm soát các công việc cần làm",
      steps:
        "Các bước triển khai dự án bao gồm lên cấu trúc của trang web, thiết kế giao diện trang web, lập trình, tối ưu trang web, fix bugs website",
      result:
        "Thành công khi đã áp dụng thành công kiến thức về lập trình web và có được một trang web tiện lợi cho việc kiểm soát các công việc cần làm. Thất bại trong việc tối ưu hoá code bởi vì trình độ vẫn còn kém và cần học hỏi thêm nhiều thứ.",
      thoughts:
        "Khi triển khai dự án cần chú trọng việc thiết lập cấu trúc dự án, tránh việc sinh ra nhiều vấn đề cần giải quyết sau này",
    },
    {
      title: "todo",
      target: "Có được một trang web giúp kiểm soát các công việc cần làm",
      steps:
        "Các bước triển khai dự án bao gồm lên cấu trúc của trang web, thiết kế giao diện trang web, lập trình, tối ưu trang web, fix bugs website",
      result:
        "Thành công khi đã áp dụng thành công kiến thức về lập trình web và có được một trang web tiện lợi cho việc kiểm soát các công việc cần làm. Thất bại trong việc tối ưu hoá code bởi vì trình độ vẫn còn kém và cần học hỏi thêm nhiều thứ.",
      thoughts:
        "Khi triển khai dự án cần chú trọng việc thiết lập cấu trúc dự án, tránh việc sinh ra nhiều vấn đề cần giải quyết sau này",
    },
  ];
  return (
    <>
      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          handleModal={handleModal}
          handleClose={handleClose}
          desc={desc}
          isDemo={isDemo}
        />
      )}
      <div
        id="projects"
        className="w-11/12 m-auto md:pt-40 pt-[80px] pb-40 border-[var(--border-color)] border-b-[1px]"
      >
        <h1 className="text-center font-bold text-4xl">Projects</h1>
        <p className="text-center font-normal text-sm pt-2 text-[var(--text-color-desc)]">
          Most Recent Work
        </p>
        <div className="w-10/12 m-auto flex items-center justify-center pt-20">
          <div className="grid grid-cols-1 gap-14">
            <div className="grid lg:grid-cols-5 grid-cols-1 lg:flex-row overflow-hidden rounded-lg items-center lg:gap-10 lg:p-8 shadow-zinc-500 dark:shadow-gray-400 shadow-lg">
              <div className="h-full w-full col-span-3 lg:rounded-lg overflow-hidden">
                <div onClick={() => handleModal(0)}>
                  <img
                    className="h-full object-fill hover:scale-105 ease-linear transform transition duration-100 cursor-pointer"
                    src="../assets/img/lofi.jpg"
                    alt=""
                  />
                </div>
              </div>
              <span className="flex flex-col justify-between col-span-2 h-full p-8 lg:p-0">
                <div className="flex flex-col">
                  <h1 className="text-center font-bold text-2xl">
                    Lofi - Stay focused
                  </h1>
                  <h4 className="pt-5 text-base">
                    A website I cloned from lofi.co to relax, stay focused while
                    learning, and practice programming skills.
                  </h4>
                  <p className="text-sm font-light text-[var(--text-color-desc)] pt-2">
                    2023 - Web development
                  </p>
                  <ul className="pt-4 flex flex-col gap-2">
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">ReactJs</p>
                    </li>
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">HTML & CSS</p>
                    </li>
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">Bootstrap</p>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-4 pt-8 justify-center">
                  <a
                    href="https://github.com/tunizme/lofi-app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      View source
                    </div>
                  </a>
                  <div onClick={() => handleModal("demo")}>
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      Video demo
                    </div>
                  </div>
                  <a
                    href="https://lofi-app-chi.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      Visit Website
                    </div>
                  </a>
                </div>
              </span>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-1  lg:flex-row overflow-hidden rounded-lg items-center lg:gap-10 lg:p-8 shadow-zinc-500 dark:shadow-gray-400 shadow-lg">
              <div className="h-full w-full col-span-3 lg:rounded-lg overflow-hidden">
                <div onClick={() => handleModal(1)}>
                  <img
                    className="h-full object-fill hover:scale-105 ease-linear transform transition duration-100 cursor-pointer"
                    src="../assets/img/todolist.jpg"
                    alt=""
                  />
                </div>
              </div>
              <span className="flex flex-col justify-between col-span-2 h-full p-8 lg:p-0">
                <div className="flex flex-col">
                  <h1 className="text-center font-bold text-2xl">To-Do List</h1>
                  <h4 className="pt-5 text-base">
                    A website I write to organize what needs to get done.
                  </h4>
                  <p className="text-sm font-light text-[var(--text-color-desc)] pt-2">
                    2022 - Design & Web development
                  </p>
                  <ul className="pt-4 flex flex-col gap-2">
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">Javascript</p>
                    </li>
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">HTML & CSS</p>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-4 pt-8 justify-center">
                  <a
                    href="https://github.com/tunizme/todolist"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      View source
                    </div>
                  </a>
                  <div onClick={() => handleModal("demo")}>
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      Video demo
                    </div>
                  </div>
                  <a
                    href="https://tunizme.github.io/todolist/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      Visit Website
                    </div>
                  </a>
                </div>
              </span>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-1  lg:flex-row overflow-hidden rounded-lg items-center lg:gap-10 lg:p-8 shadow-zinc-500 dark:shadow-gray-400 shadow-lg">
              <div className="h-full w-full col-span-3 lg:rounded-lg overflow-hidden">
                <div>
                  <img
                    className="h-full object-fill hover:scale-105 ease-linear transform transition duration-100 cursor-pointer"
                    src="../assets/img/ecommerce.jpg"
                    alt=""
                  />
                </div>
              </div>
              <span className="flex flex-col justify-between col-span-2 h-full p-8 lg:p-0">
                <div className="flex flex-col">
                  <h1 className="text-center font-bold text-2xl">
                    Coffee - Shop
                  </h1>
                  <h4 className="pt-5 text-base">
                    I write a website to improve my knowledge and learn new
                    technologies through this project.
                  </h4>
                  <p className="text-sm font-light text-[var(--text-color-desc)] pt-2">
                    2023 - Web development
                  </p>
                  <ul className="pt-4 flex flex-col gap-2">
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">ReactJs</p>
                    </li>
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">HTML & CSS</p>
                    </li>
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">Tailwind CSS</p>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-4 pt-8 justify-center">
                  <a
                    href="https://github.com/tunizme/coffee-shop"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      View source
                    </div>
                  </a>
                  <a
                    href="https://coffee-shop-7h03l5qlv-tunizme.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      Visit Website
                    </div>
                  </a>
                </div>
              </span>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-1  lg:flex-row overflow-hidden rounded-lg items-center lg:gap-10 lg:p-8  shadow-zinc-500 dark:shadow-gray-400 shadow-lg">
              <div className="h-full w-full col-span-3 lg:rounded-lg overflow-hidden">
                <div>
                  <img
                    className="h-full object-fill hover:scale-105 ease-linear transform transition duration-100 cursor-pointer"
                    src="../assets/img/portfolio.jpg"
                    alt=""
                  />
                </div>
              </div>
              <span className="flex flex-col justify-between col-span-2 h-full p-8 lg:p-0">
                <div className="flex flex-col">
                  <h1 className="text-center font-bold text-2xl">Portfolio</h1>
                  <h4 className="pt-5 text-base">
                    A website I write to introduce myself, my skills,
                    experience, and my projects
                  </h4>
                  <p className="text-sm font-light text-[var(--text-color-desc)] pt-2">
                    2023 - Design & Web development
                  </p>
                  <ul className="pt-4 flex flex-col gap-2">
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">ReactJs</p>
                    </li>
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">HTML & CSS</p>
                    </li>
                    <li className="flex items-center">
                      <BsArrowBarRight size={20} />
                      <p className="ml-4 font-light">Tailwind CSS</p>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-4 pt-8 justify-center">
                  <a
                    href="https://github.com/tunizme/portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block "
                  >
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      View source
                    </div>
                  </a>
                  <a
                    href="https://portfolio-tunizme.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block "
                  >
                    <div className="p-2 border-[1px] rounded-md border-[var(--color-bg-dark)] dark:border-[var(--color-text-dark)] dark:hover:bg-[var(--text-color-dark)] dark:hover:text-[var(--text-color-light)] hover:bg-[var(--text-color-light)] hover:text-[var(--text-color-dark)]">
                      Visit Website
                    </div>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
