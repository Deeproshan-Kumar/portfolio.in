"use client";

import Button from "../button/Button";
import Link from "next/link";
import Social from "../social/Social";
import { FaDownload, FaCaretDown } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="section hero" id="hero" aria-label="Hero Section">
      <div className="container">
        <div className="panels">
          <div className="panel left">
            <div>
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
                link="https://deeproshan-kumar.github.io/portfolio/assets/docs/Deeproshan_Kumar_Resume.pdf"
                icon={<FaDownload />}
                isButton={false}
              />
            </div>
          </div>
          <div className="panel right">
            <div className="animation">
              <div className="marquee" data-scroll data-scroll-speed="0.2">
                <h2 className="inner">HTML</h2>
              </div>
              <div className="marquee" data-scroll data-scroll-speed="-0.2">
                <h2 className="inner">CSS</h2>
              </div>
              <div className="marquee" data-scroll data-scroll-speed="0.5">
                <h2 className="inner">JavaScript</h2>
              </div>
              <div className="marquee" data-scroll data-scroll-speed="-0.5">
                <h2 className="inner">TypeScript</h2>
              </div>
              <div className="marquee" data-scroll data-scroll-speed="0.7">
                <h2 className="inner">React</h2>
              </div>
              <div className="marquee" data-scroll data-scroll-speed="-0.7">
                <h2 className="inner">Next</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="#about" className="rounded-button">
        <FaCaretDown className="icon" />
      </Link>
    </section>
  );
}
