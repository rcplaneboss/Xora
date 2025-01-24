import clsx from "clsx";
import Marker from "./Marker";

const Button = ({ icon, children, href, containerClassName, onClick, markerFill}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center px-4 g4 rounded-2xl min-h-[60px] inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[-1px]">
          <Marker fill={markerFill}/>
        </span>
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="font-poppins base-bold uppercase relative text-p1 z-2">{children}</span>
      </span>
      <span  className="glow-before glow-after"/>
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
