"use client";

import Button from "../button/Button";
import SectionIntro from "../section-intro/SectionIntro";
import { IoMdSend } from "react-icons/io";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Contact.scss";

export default function Contact() {
  const handleSubmit = () => {};

  return (
    <section
      className="section contact py-5"
      id="contact"
      aria-label="Contact Section"
    >
      <div className="container">
        <SectionIntro title="Contact" description="Get in Touch" />
        <div className="contact-wrapper">
          <div className="panel panel-left"></div>
          <div className="panel panel-right">
            <form autoComplete="off">
              <div className="fields">
                <div className="w-50">
                  <div className="inner field">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required
                    />
                    <label htmlFor="first-name">First Name</label>
                    <span className="animation"></span>
                  </div>
                </div>
                <div className="w-50">
                  <div className="inner field">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      required
                    />
                    <label htmlFor="last-name">Last Name</label>
                    <span className="animation"></span>
                  </div>
                </div>
              </div>
              <div className="fields">
                <div className="w-50">
                  <div className="inner field">
                    <input type="text" name="email" id="email" required />
                    <label htmlFor="email">Email</label>
                    <span className="animation"></span>
                  </div>
                </div>
                <div className="w-50">
                  <div className="inner field">
                    <input type="tel" name="mobile" id="mobile" required />
                    <label htmlFor="mobile">Mobile</label>
                    <span className="animation"></span>
                  </div>
                </div>
              </div>
              <div className="w-full fields">
                <div className="inner field">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={6}
                    placeholder="Message"
                  ></textarea>
                  <span className="animation"></span>
                </div>
              </div>
              <div className="w-full">
                <div className="inner">
                  <Button
                    text="Send Message"
                    isButton={true}
                    icon={<IoMdSend />}
                    onClick={handleSubmit}
                  />
                  <div className="spinner"></div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-details-wrapper">
          <div className="panel left">
            <article style={{ "--clr": "var(--pink)" } as React.CSSProperties}>
              <div className="group">
                <h2>Current Location</h2>
                <div className="icon-box">
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <p>
                    Seema City, Near Omaxe Avenue, Lucknow, <br />
                    Uttar Pradesh (226016).
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="panel middle">
            <article style={{ "--clr": "var(--lime)" } as React.CSSProperties}>
              <div className="group">
                <h2>Permanent Location</h2>
                <div className="icon-box">
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <p>
                    Dharawan, Kusumhi Kalan, Ghazipur, <br />
                    Uttar Pradesh (233302).
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="panel right">
            <article style={{ "--clr": "var(--blue)" } as React.CSSProperties}>
              <div className="group">
                <h2>Let&apos;s Connect</h2>
                <div className="icon-box">
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <p>
                    <a href="mailto:deeproshankumar123@gmail.com">
                      deeproshankumar123
                    </a>
                  </p>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>
                  <p>
                    <a href="tel:+91 7271053944">+91 7271053944</a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
