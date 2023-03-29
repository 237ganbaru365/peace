Point

1.  Build

- use Vite to improve performance (light and fast)
  `npm create vite@latest`

2.  File structure

    - grouping by routes [Official Resource](https://legacy.reactjs.org/docs/faq-structure.html)

3.  Security

    1.  Authentication (need to set up both side which are API and Frontend)
        I wanna more focus production-level security for this app. Which means what is usually used in real world for authentication to protect users.

        - multi-factor authentication
        - need to create nes session ID for each login
        - disbaled HTML (submit button)
        - dangerouslySetInnerHTML
        - varidation URL (if it uses HTTP or HTTPS)
        - WAF (web application firrewall)

          - for Frontend (React.js)

          1. disable react dev tools
             to protect the user credential information for other users
             [npm reference](https://www.npmjs.com/package/@fvilers/disable-react-devtools)

          2. Should we store the user info to state?

          3. encript all user's password
             bcryt

          4. Keep data in JWT ande decode it

          - for Backend (Node.js)

          1. just pass username and accesstaken

4.  Accesibility
    - use aria attribute
    - Screen reader (Chrome Extention)

---

Features

1. Authentication
   options: React hooks + JWT / auth0 / firebase

- Form Validation
- Connect to backend API using axios
- Holding states in grobal using Context API (useContext, createContext, Context Provider)
- Protected Route using react-router-dom \*check if there is new way

---

Dependenseas

- axios : fetch API
  `npm i axios`

- styled-components : style in js
  `npm install --save styled-components`
  `npm install --save-dev @types/styled-components`

- fontawsome : icon
  `npm i @fortawesome/react-fontawesome@latest @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core`

- react-router-dom v6
  \*\* latest version has different approach to use it, so let me take a learn memo
