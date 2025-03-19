"use client";

import { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Button from "../button/Button";
import SectionIntro from "../section-intro/SectionIntro";
import ContactThumbnail from "../../../public/images/contact.jpg";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}

export default function Contact() {
  const [isPending, setIsPending] = useState<Boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (form.current) {
      setIsPending(true);
      setIsError("");
      setIsSuccess("");
      emailjs
        .sendForm("service_exznp1w", "template_9ixncvq", form.current, {
          publicKey: "y7oQUNOfAzJ6sDGyz",
        })
        .then(
          () => {
            setIsPending(false);
            setIsSuccess("Your message has been sent successfully!");
          },
          (error) => {
            setIsPending(false);
            setIsError("FAILED..." + error.text);
          }
        );
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <section
      className="section contact py-5"
      id="contact"
      aria-label="Contact Section"
    >
      <div className="container">
        <SectionIntro title="Contact" description="Get in Touch" />
        <div className="contact-wrapper">
          <div className="panel panel-left">
            <Image src={ContactThumbnail} alt="Thumbnail" className="image" />
          </div>
          <div className="panel panel-right">
            <form ref={form} autoComplete="off" onSubmit={handleSubmit}>
              <div className="fields">
                <div className="w-50">
                  <div className="inner field">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      id="firstName"
                      required
                      onChange={handleChange}
                    />
                    <label htmlFor="firstName">First Name</label>
                    <span className="animation"></span>
                  </div>
                </div>
                <div className="w-50">
                  <div className="inner field">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      id="lastName"
                      required
                      onChange={handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <span className="animation"></span>
                  </div>
                </div>
              </div>
              <div className="fields">
                <div className="w-50">
                  <div className="inner field">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      id="email"
                      required
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <span className="animation"></span>
                  </div>
                </div>
                <div className="w-50">
                  <div className="inner field">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      id="mobile"
                      required
                      onChange={handleChange}
                    />
                    <label htmlFor="mobile">Mobile</label>
                    <span className="animation"></span>
                  </div>
                </div>
              </div>
              <div className="w-full fields">
                <div className="inner field">
                  <textarea
                    name="message"
                    value={formData.message}
                    id="message"
                    cols={30}
                    rows={6}
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                  <span className="animation"></span>
                </div>
              </div>
              <div className="w-full fields action">
                <Button
                  text={isPending ? "Sending" : "Send Message"}
                  isButton={true}
                  icon={<IoMdSend />}
                />
                {isPending && <div className="spinner"></div>}
              </div>
              {isError && (
                <div className="w-full fields">
                  <p className="msg error">{isError}</p>
                </div>
              )}
              {isSuccess && (
                <div className="w-full fields">
                  <p className="msg success">{isSuccess}</p>
                </div>
              )}
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