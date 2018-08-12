import 'typeface-merriweather-sans';
import { injectGlobal } from 'emotion';

const global = injectGlobal`
  html {
    box-sizing: border-box;
    font-family: "Merriweather Sans", sans-serif;
    font-size: 16px;
    color: #666;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  p {
    color: var(--textColor);
  }

  h1, h2, h3 {
    color: var(--lightTextColor);
  }

  h1 {
    font-size: 2.4em;
  }

  h2 {
    font-size: 1.8em;
  }

  ul {
    list-style-position: inside;
  }

  a {
    color: var(--linkColor);
    transition: .3s;
  }

  @media (hover: hover)  {
    a:hover {
      color: var(--hoverLinkColor);
    }
  }

  :not(pre) > code[class*='language-'] {
    background: #eee;
    color: #333;
    text-shadow: none;
    padding: 1px 5px 2px;
    border-radius: 2px;
  }

   pre[class*="language-"] {
     background: #444;
   }

  *::-webkit-scrollbar {
    width: var(--scrollBarWidth);
  }
  *::-webkit-scrollbar-track {
    background: var(--scrollBarTrack);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--scrollBarThumb);
  }


`;

export default global;