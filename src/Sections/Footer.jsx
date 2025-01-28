import { socials } from "../../constants";

const Footer = () => {
  return (
    <footer>
      <div className="py-10 container">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright Abdul Rahman Qosim</p>
            <div className="flex items-center justify-center sm:ml-auto">
              <p classname="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                Privacy policy
              </p>
              <p className="text-p5 transition-all duration-500 hover:text-p1">
                Terms of Use
              </p>
            </div>
                  </div>
                  <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
                      {socials.map(({ id, url, icon, title }) => (
                          <li key={id}>
                              <a href={url} className="social-icon">
                                  <img src={icon} alt={title} className="size-1/3 object-contain" />
                              </a>
                          </li>
                      ))}
                  </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
