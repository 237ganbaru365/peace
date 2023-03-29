import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const LayoutRoot = () => {
  return (
    <StyledWrapper>
      <SideBar />
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </StyledWrapper>
  );
};

export default LayoutRoot;
