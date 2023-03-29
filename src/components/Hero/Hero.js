import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Umair
        </SectionTitle>
        <SectionText>
          Highly motivated and passionate Software Developer with 3+ years of
          hands-on experience designing and developing applications and
          solutions using modern web & mobile technologies.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
