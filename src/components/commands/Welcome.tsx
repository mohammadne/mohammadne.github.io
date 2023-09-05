import {
  Cmd,
  HeroContainer,
  PreName,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
╭━╮╭━╮  ╭╮               ╭┳━╮ ╭┳━━━╮
┃┃╰╯┃┃  ┃┃               ┃┃┃╰╮┃┃╭━━╯
┃╭╮╭╮┣━━┫╰━┳━━┳╮╭┳╮╭┳━━┳━╯┃╭╮╰╯┃╰━━╮
┃┃┃┃┃┃╭╮┃╭╮┃╭╮┃╰╯┃╰╯┃╭╮┃╭╮┃┃╰╮┃┃╭━━╯
┃┃┃┃┃┃╰╯┃┃┃┃╭╮┃┃┃┃┃┃┃╭╮┃╰╯┃┃ ┃┃┃╰━━╮
╰╯╰╯╰┻━━┻╯╰┻╯╰┻┻┻┻┻┻┻╯╰┻━━┻╯ ╰━┻━━━╯
          `}
        </PreName>
        <div>Welcome to my portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
