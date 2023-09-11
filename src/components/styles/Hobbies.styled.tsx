import styled from "styled-components";

export const HobbyContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
`;

export const HobbiesIntro = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  line-height: 1.5rem;
`;

export const HobbyTitle = styled.div`
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

export const HobbyDesc = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  text-align: justify;
  line-height: 1.5rem;
  max-width: 500px;
`;
