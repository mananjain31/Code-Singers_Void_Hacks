import CommonNav from "components/nav/CommonNav";
import OurTeam from "components/OurTeam";
import SectionWrapper from "components/wrappers/SectionWrapper";
import React from "react";
import gif1 from "assets/1.gif";
import gif2 from "assets/2.gif";
import heroGIF from "assets/3.gif";
import gif4 from "assets/4.gif";
import LogoSquare from "assets/VoidSquare.jpg";

const LandingPage = () => {
  return (
    <>
      <CommonNav />
      <header className="">
        <SectionWrapper
          heading="One Stop Solution for waste Management"
          paragraphs={[" ", " ", ""]}
          actionButton={{ text: "Services", to: "/services" }}
          image={LogoSquare}
        />
      </header>
      <hr />
      <main>
        {/* About Indore Waste mangement */}
        <SectionWrapper
          heading="About Indore Waste Management"
          paragraphs={[
            "lorem ipsum dolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consectetur.",
          ]}
          inverted
          image={heroGIF}
        />
        <hr />
        {/* Our Proposed Solution / What we do */}
        <SectionWrapper
          heading="Our Proposed Solution / What we do"
          paragraphs={[
            "lorem ipsum dolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consecteturdolor sit amet consectetur.",
          ]}
          image={gif2}
        />
        {/* Our Team */}
        <OurTeam />
      </main>
      {/* Contact us */}
      <footer></footer>
    </>
  );
};

export default LandingPage;
