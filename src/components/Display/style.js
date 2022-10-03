import styled from "styled-components";

export const Message = styled.p`
  font-size: 1.2rem;
  color: var(--bright-blue);
  text-shadow: 3px 3px 10px var(--secondary-shadow);
`;

export const Result = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5%;

  h3 {
    font-size: 1.1rem;
    color: var(--bright-blue);
    text-shadow: 3px 3px 10px var(--secondary-shadow);
  }

  p {
    color: var(--dark);
  }
`;
