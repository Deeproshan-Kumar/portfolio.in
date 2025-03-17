import SectionIntro from "../section-intro/SectionIntro";
import { FaHtml5, FaCode, FaPaintbrush } from "react-icons/fa6";

import "./Services.scss";

export default function Services() {
  return (
    <section className="section services py-5" id="services" aria-label="Services Section">
      <div className="container">
        <SectionIntro title="Services" description="What I Love to do" />
        <div className="services-wrapper">
          <div className="service">
            <div
              className="icon-box"
              style={{ "--clr": "var(--pink)" } as React.CSSProperties}
            >
              <div className="box" data-index="01">
                <div className="icon">
                  <FaHtml5 />
                </div>
                <div className="contents">
                  <h4>Web Design</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="service">
            <div
              className="icon-box"
              style={{ "--clr": "var(--lime)" } as React.CSSProperties}
            >
              <div className="box" data-index="02">
                <div className="icon">
                  <FaCode />
                </div>
                <div className="contents">
                  <h4>Web Development</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="service">
            <div
              className="icon-box"
              style={{ "--clr": "var(--blue)" } as React.CSSProperties}
            >
              <div className="box" data-index="03">
                <div className="icon">
                  <FaPaintbrush />
                </div>
                <div className="contents">
                  <h4>UI/UX Design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
