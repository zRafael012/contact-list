import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    scrollbar-width: auto;
    scrollbar-color: #D7D4D8 #FFFFFF;
  }
  *::-webkit-scrollbar {
    width: 6px;
  }
  *::-webkit-scrollbar-track {
    background: var( --color-gray-0);
    border-radius:0 4px 4px 0;
  }
  *::-webkit-scrollbar-thumb {
    background-color: var( --color-primary);
    border-radius: 10px;
    border: 3px solid var(--color-gray-0);
  }
  ul,ol{
    list-style: none;
  }
    :root{
         --color-primary:#2d2a2b;
         --color-micro:#ff6a9c;
         --color-contract:#363636;
         --color-microHover:#ffb6c1;
         --color-grey-1:#868E96;
         --color-grey-2:#343B41;
         --color-grey-3:#212529;
         --color-grey-4:#121214;
         --color-white:#f4f4f4;
         --color-negative:#E83F5B;
    }
    body{
      background-color: var( --color-grey-4);
      color: var(--color-grey-0);
    }
`;
