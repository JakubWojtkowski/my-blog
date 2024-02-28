export default function Footer() {
  return (
    <div className="flex flex-col w-full px-16 py-4 mx-auto bg-dark text-lightBackground">
      <h1 className="text-center text-[360px] tracking-[-38px] font-bold">
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
              Jakub Wojtkowski '24
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
