import {
  HobbyContainer,
  HobbyDesc,
  HobbiesIntro,
  HobbyTitle,
} from "../styles/Hobbies.styled";

const Hobbies: React.FC = () => {
  return (
    <div data-testid="hobbies">
      <HobbiesIntro>
        Hobbies are the fuel for our passions, igniting<br />
        creativity and joy in our everyday lives.<br />
        Here are some of my hobbies 🚀
      </HobbiesIntro>
      {hobbies.map(({ title, desc }, index) => (
        <HobbyContainer key={index}>
          <HobbyTitle>{`${title}`}</HobbyTitle>
          <HobbyDesc>{desc}</HobbyDesc>
        </HobbyContainer>
      ))}
    </div>
  );

};

const hobbies = [
  {
    title: "Ping Pong 🏓",
    desc: "My favorite sport, playing twice or three times a week",
  },
  {
    title: "Formula 1 🏎️",
    desc: "An amazing sport which featuring high-speed racing cars, cutting-edge technology, and a global championship that captivates millions of fans around the world.",
  },
  {
    title: "Coding 💻",
    desc: "Aside my working hours, I love coding in my rest times!!!",
  }
];

export default Hobbies;
