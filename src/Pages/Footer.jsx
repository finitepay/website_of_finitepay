import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "../Data/index.js";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* Logo Section */}
          {/* <Link to="/" className="mb-10">
            <image src={mainLink} alt="Hilink Logo" width={74} height={29} />
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
        <p className="regular-14 w-full text-center text-gray-30">
        @{new Date().getFullYear()} Finitepay | All rights reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
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
