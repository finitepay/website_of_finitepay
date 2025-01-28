import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "../Data/index.js";


const Footer = () => {
  return (
  <div className="bg-headertext text-white">
    {/* header hero section.. */}
    <div className="w-full max-containing pb-5 pt-10 flex flex-wrap justify-between items-center">
            <div className="">
               <h1 className="text-2xl text-white font-extrabold">FinitePay</h1>
            </div>

            <div className="flex flex-col justify-center gap-2">

              <div className="text-sm text-footing font-medium">
                <p>Sign up for our weekly news letter</p>
              </div>

              <div className="flex gap-5 justify-center items-center flex-wrap">
                <div className="">
                  <input type="text" placeholder="Enter your email address"  className="p-3 border-none w-[300px] rounded-xl text-xs"/>
                </div>
                <div className="bg-footing p-3 rounded-xl flex justify-center items-center text-xs text-white font-medium">
                  <button className="">Subscribe</button>
                </div>
              </div>
            </div>
      </div>

    <footer className="flexCenter">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* Logo Section */}

          {/* <Link to="/" className="mb-10">
            <image src={mainLink} alt="" width={74} height={29} />
          </Link> */}

         

          {/* Footer Links Section */}
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {/* Dynamically Rendering Footer Links */}
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <li key={link}>
                      <Link to="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact Info Section */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    to="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col gap-5">
  <FooterColumn title={SOCIALS.title}>
    <ul className="regular-14 flex gap-4 text-gray-30">
      {SOCIALS.links.map((link) => (
        <li key={link.alt}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.src} alt={link.alt} width={24} height={24} />
          </a>
        </li>
      ))}
    </ul>
  </FooterColumn>
</div>
          </div>
        </div>

        {/* Divider and Footer Note */}
        <div className="border bg-gray-20" />
        <p className="regular-14  w-full text-center text-gray-30 pb-10">
           @{new Date().getFullYear()} Finitepay | All rights reserved
        </p>
      </div>
    </footer>
    </div>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="bold-18 whitespace-nowrap font-semibold">{title}</h4>
      {children}
    </div>
  );
};

// PropTypes validation for FooterColumn
FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Footer;
