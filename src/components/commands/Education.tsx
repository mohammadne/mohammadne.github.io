import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc (Hons) in Computer Science",
    desc: "Amirkabir University of Technology (AUT) | 2018 - 2023",
  },
  {
    title: "M.Sc Of Artifical Intelligence",
    desc: "University Of Isfahan | 2023 - 2025",
  },
  {
    title: "IELTS 7.5",
    desc: "British Council Tehran | 2023",
  },
];

export default Education;
