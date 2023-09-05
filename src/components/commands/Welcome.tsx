import {
  Cmd,
  Container,
  PreName,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Welcome;
