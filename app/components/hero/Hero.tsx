"use client";

import Button from "../button/Button";
import Social from "../social/Social";
import { FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="section hero" id="hero" aria-label="Hero Section">
      <div className="container">
        <h1 className="text-lg first" data-scroll data-scroll-speed="0.25">
          Creative
        </h1>
        <div className="panels">
          <div className="panel left">
            <div data-scroll data-scroll-speed="0.5">
              <p>Hello I am,</p>
              <div className="legend">
                <h1>Deeproshan Kumar</h1>
                <p>
                  I am a&nbsp;
                  <ReactTyped
                    strings={[
                      "Software Engineer",
                      "Front End Engineer",
                      "Web Developer",
                      "Blogger",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop
                  >
                    <input type="text" className="typed" />
                  </ReactTyped>
                </p>
              </div>
              <Social />
              <Button
                text="Download CV"
                link="/resume/Deeproshan_Kumar_Resume.pdf"
                icon={<FaDownload />}
                isButton={false}
              />
            </div>
          </div>
          <div className="panel right"></div>
        </div>
        <h1 className="text-lg second" data-scroll data-scroll-speed="0.25">
          Developer
        </h1>
      </div>
    </section>
  );
}
