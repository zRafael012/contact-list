import styled from "styled-components";

export const AsideS = styled.aside`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  background-color: #00000050;
  div {
    width: 95%;
    max-width: 369px;
    background-color: var(--color-grey-3);
    border-radius: 3.21px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    div {
      width: 100%;
      background-color: var(--color-grey-2);
      height: 40px;
      padding: 14px 17px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-weight: 700;
        font-size: 0.802rem;
        color: var(--color-white);
      }
      button {
        background-color: transparent;
        cursor: pointer;
        border: none;
        color: var(--color-grey-1);
        font-weight: 600;
        font-size: 0.802rem;
      }
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      background-color: var(--color-grey-3);
      padding: 9.63px 17.65px;
      div {
        width: unset;
        height: unset;
        background-color: unset;
        padding: unset;
        gap: unset;
      }
    }
  }
  @media (min-width: 435px) {
    & {
      div {
        div {
          padding: 19px 22px;
          height: 50px;
          h3 {
            font-size: 1rem;
          }
          button {
            font-size: 1rem;
          }
        }
        form {
          padding: 9.63px 22px 25px;
        }
      }
    }
  }
`;
