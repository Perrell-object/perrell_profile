import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        " I bring a unique blend of design expertise and strong frontend skills to the table. Originally a designer, I strive to create exceptional user experiences, with a focus on functionality. I'm a certified project manager, which has come in handy when communicating with cross-functional teams and driving impactful growth. "
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button> 
      </LeftSection>
    </Section>
  </>
);

export default Hero;