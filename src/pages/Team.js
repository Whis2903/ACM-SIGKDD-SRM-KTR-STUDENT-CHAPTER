import React from "react";
import "../css/Team.css";
import ProfileCard from "../components/team/ProfileCard";
import TeamCarousel from "../components/team/TeamCarousel";
import Tab from "../components/team/tabbar/Tab";
import TabContent from "../components/team/tabbar/TabContent";
import Sample from "../assets/CoreMembers/Sample.png";
import Sahil from "../assets/CoreMembers/Sahil.png";
import Aditya from "../assets/CoreMembers/Aditya.png";
import Kalpana from "../assets/CoreMembers/kalpana.png";
import PCKar from "../assets/CoreMembers/drpckar.jpeg"
function Team() {
  return (
    <>
      <TeamCarousel />
      <div className="gbc1"></div>
      <ul className="nav nav-tabs justify-content-center" role="tablist">
        <Tab
          className="nav-link tab-btn active"
          id="year2023-tab"
          targetID="#year2023-tab-pane"
          title="2024 - 2025"
          selected="true"
        />
        <Tab
          className="nav-link tab-btn"
          id="year2024-tab"
          targetID="#year2024-tab-pane"
          title="2025 - 2026"
          selected="false"
        />
      </ul>
      <div className="tab-content">
        <TabContent
          id="year2023-tab-pane"
          tab="year2023-tab"
          className="tab-pane fade show active"
          content={
            <section className="section" style={{ paddingTop: "40px" }}>
              <div className="container">
                <div className="bbc1"></div>
                <div className="row">
                  <div className="text-center">
                    <div className="section-title">
                      <h1>
                        Meet Our{" "}
                        <span style={{ color: "var(--secondary-color)" }}>
                          TEAM of developers, designers and creators
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-tabs justify-content-center"
                  role="tablist"
                >
                  <Tab
                    className="nav-link tab-btn"
                    id="faculty-tab"
                    targetID="#faculty-tab-pane"
                    title="Faculty"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn active"
                    id="chapterlead-tab"
                    targetID="#chapterlead-tab-pane"
                    title="Core Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="technical-tab"
                    targetID="#technical-tab-pane"
                    title="R&D Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="webappdev-tab"
                    targetID="#webappdev-tab-pane"
                    title="Web/App Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="design-tab"
                    targetID="#design-tab-pane"
                    title="Creatives Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="event-tab"
                    targetID="#event-tab-pane"
                    title="Corporate Team"
                    selected="false"
                  />
                </ul>
                <div className="tab-content tab-btn">
                  <TabContent
                    id="chapterlead-tab-pane"
                    tab="chapterlead-tab"
                    className="tab-pane fade active show"
                    content={
                      <>
                        <ProfileCard
                          img={Aditya}
                          name="Aditya Verma"
                          role="Chairperson (Lead)"
                          linkedinUrl="https://www.linkedin.com/in/"
                          githubUrl="https://github.com/ADITYAVOFFICIAL/"
                        />
                        <ProfileCard
                          img={Sahil}
                          name="Sahil Adhikari"
                          role="Vice-Chairperson"
                          linkedinUrl="https://www.linkedin.com/in/sahil-adhikari-57b445250/"
                          githubUrl="https://github.com/sahilopl"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="technical-tab-pane"
                    tab="technical-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Sample}
                          name="Sample"
                          role="R&D Head"
                          linkedinUrl="https://www.linkedin.com/in/"
                          githubUrl="https://github.com/"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="faculty-tab-pane"
                    tab="faculty-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Kalpana}
                          name="Dr. Kalpana AV"
                          role="Faculty Co-ordinator"
                          linkedinUrl="https://www.linkedin.com/in/"
                        />
                         <ProfileCard
                          img={PCKar}
                          name="Dr. PC Karthik"
                          role="Faculty Sponsor"
                          linkedinUrl="https://www.linkedin.com/in/karthik-chandrasekaran-9667b4164/?originalSubdomain=in"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="design-tab-pane"
                    tab="design-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Sample}
                          name="Sample"
                          role="Creatives Head"
                          linkedinUrl="https://www.linkedin.com/in/"
                          githubUrl="https://github.com/"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="event-tab-pane"
                    tab="event-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Sample}
                          name="Sample"
                          role="Corporate Head"
                          linkedinUrl="https://www.linkedin.com/in/"
                          githubUrl="https://github.com/"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="webappdev-tab-pane"
                    tab="webappdev-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Sample}
                          name="Sample"
                          role="Web/App Dev Head"
                          linkedinUrl="https://www.linkedin.com/in/"
                          githubUrl="https://github.com/"
                        />
                      </>
                    }
                  />
                </div>
              </div>
            </section>
          }
        />
        <TabContent
          id="year2024-tab-pane"
          tab="year2024-tab"
          className="tab-pane fade show"
          content={
            <section className="section" style={{ paddingTop: "40px" }}>
              <div className="container">
                <div className="row">
                  <div className="text-center">
                    <div className="section-title">
                      <h1>
                        Next Team{" "}
                        <span style={{ color: "var(--secondary-color)" }}>
                          Comming soon...
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        />
      </div>
    </>
  );
}

export default Team;