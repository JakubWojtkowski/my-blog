export default function Footer() {
  return (
    <div className="flex flex-col w-full px-16 py-4 mx-auto bg-dark text-lightBackground">
      <h1 className="text-center sm:text-[140px] sm:tracking-[-14px] md:text-[180px] md:tracking-[-20px] lg:text-[240px] lg:tracking-[-26px] xl:text-[320px] xl:tracking-[-32px] 2xl:text-[360px] 2xl:tracking-[-38px] font-bold">
        improveu
      </h1>
      <div className="flex flex-col">
        <span className="text-right text-base tracking-tight hover:underline cursor-pointer transition-opacity">
          <a href="mailto:jvkub.wojtkowski@gmail.com">connect</a>
        </span>
        <div className="flex flex-row justify-between items-end text-base tracking-tight">
          <span>
            Local time <br /> 2:59 AM GMT+0
          </span>
          <span>
            Created by{" "}
            <a href="https://github.com/JakubWojtkowski" target="_blank">
              Jakub Wojtkowski {"'"}24
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
