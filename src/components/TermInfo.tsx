import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>mohammadne.me</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
