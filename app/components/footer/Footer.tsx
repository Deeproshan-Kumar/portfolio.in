import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="panel left">
          <div className="inner">
            <h2>Deeproshan Kumar</h2>
            <p>SDE | Front End Engineer</p>
          </div>
        </div>
        <div className="panel middle">
          <div className="inner">
            <div className="brand">
              <a href="#">
                <Image src={Logo} alt="Logo" height={75} width={75} />
              </a>
            </div>
            <p className="copyright">
              Copyright DRX{" "}
              <span className="year">2022-{new Date().getFullYear()}</span>. All
              rights reserved.
            </p>
          </div>
        </div>
        <div className="panel right">
          <div className="inner">
            <ul>
              <li>
                <Link href="tel:+917271053944"><div className="icon"><FaPhoneAlt /></div>+91 7271053944</Link>
              </li>
              <li>
                <Link href="mailto:deeproshankumar123@gmail.com">
                  <div className="icon"><FaEnvelope /></div>deeproshankumar123
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/+917271053944?text=Hi Deeproshan">
                  <div className="icon"><FaWhatsapp /></div>+91 7271053944
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
