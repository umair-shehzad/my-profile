import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>

    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript <br />
            TypeScript <br />
            React <br />
            React Native <br />
            Redux <br />
            Axios <br />
            React Bootstrap <br />
            Styled Components <br />
            Material UI <br />
            Next.js <br />
            GraphQL <br />
            Jest <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express <br />
            MongoDB <br />
            PostgreSQL <br />
            Socket.IO <br />
            Mocha.js <br />
            Git <br />
            Nest.js <br />
            Passport.js <br />
            Docker <br />
            Kubernetes <br />
            AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Sketch <br />
            Figma <br />
            Adobe XD <br />
            Webflow <br />
            Framer X <br />
            Invision Studio <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
