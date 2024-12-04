import LogoIcon from "../assets/icons/logo-icon";

export default function Logo() {
  return (
    <div className="inline-flex gap-1 items-center">
      <LogoIcon />
      <span className="font-semibold text-xl smallPhone:text-base">
        SherpaBank
      </span>
    </div>
  );
}
