import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center md:footer p-10 bg-base-200 text-base-content">
      <aside>
        <Link to="/" className="text-2xl font-bold">SkillSwap</Link>
        <p>
          Your local skill exchange platform.
          <br />
          Learn, share, and grow with your community.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">contact@skillswap.com</a>
        <a className="link link-hover">+1 (123) 456-7890</a>
        <a className="link link-hover">123 Skill Swap Lane, Community City</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaTwitter size={24} />
          </a>
          <a target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaFacebook size={24} />
          </a>
          <a target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaInstagram size={24} />
          </a>
          <a target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaLinkedin size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
