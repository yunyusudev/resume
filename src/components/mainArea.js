import React from "react";
import Section1 from "./section1.js"
import AboutMe from "./section2_aboutMe.js"
import Skills from "./section3_skills.js"
import Portfolio from "./section4_portfolio.js"
import Experiences from "./section5_experiences.js"
import Contact from "./section6_contact.js"
import Footer from "./footer.js"

function MainArea() {
    return (
        <main id="Top">
            <div className="lineBox"><hr className="line" /></div>
            <section className="section1">
                <Section1 />
            </section>
            <section className="section2" id="AboutMe">
                <AboutMe />
            </section>
            <section className="section3" id="Skills">
                <Skills />
            </section>
            <section className="section4" id="Portfolio">
                <Portfolio />
            </section>
            <section className="section5" id="Experiences">
                <Experiences />
            </section>
            <section className="section6" id="Contact">
                <Contact />
            </section>
            <Footer />
        </main>
    )
}


export default MainArea;