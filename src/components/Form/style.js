import styled from "styled-components";

export const StyledForm = styled.form`
  position: relative;

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    outline: none;
    position: relative;
  }

  button {
    position: absolute;
    right: -1%;
    bottom: -15%;
    border: 2px solid var(--light-blue);
    color: var(--light-blue);
    background: none;
    border-radius: 10px;
    padding: 6px;
    cursor: pointer;
  }

  button:hover {
    color: var(--secondary-shadow);
    border-color: var(--secondary-shadow);
  }

  .error-message {
    color: var(--bright-blue);
    font-size: 0.8rem;
    position: absolute;
    bottom: -5%;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  padding: 3px 5px;
  width: 100%;
  border: 2px solid var(--primary-shadow);
  margin-bottom: 15px;
`;

export const MaskedInput = styled.div`
  position: relative;

  input {
    color: #ffffff;
  }
  span {
    font-size: 0.9rem;
    position: absolute;
    left: 3%;
    top: 12%;
    background-color: #ffffff;
    width: 65%;
    pointer-events: none;
  }
`;
