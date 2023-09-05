import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
  SpaceBetween,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <SpaceBetween>
        Hi, my name is <HighlightSpan>Mohammad Nasr</HighlightSpan>!
      </SpaceBetween>
      <SpaceBetween>
        I'm a <HighlightAlt>Software & Cloud Engineer</HighlightAlt>
      </SpaceBetween>
      <SpaceBetween>
        Skilled, focused and forward looking software engineer, interested in <br />
        open source communities with more than 4 years of experience in a variety <br />
        of environments with a breadth of programs and technologies. <br />
        experienced developer to design and architect innovative software solutions. <br />
        Also interested in computer science, tech books, networking and machine learning.
      </SpaceBetween>
    </AboutWrapper>
  );
};

export default About;
