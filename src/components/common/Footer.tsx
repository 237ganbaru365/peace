import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  background-color: #1f1d2b;
  color: white;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <small>&copy; Peace - War Films Archives - 2022</small>
    </FooterWrapper>
  );
}
