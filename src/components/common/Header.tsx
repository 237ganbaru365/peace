import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 30px;
  position: sticky;
  top: 0;
  right: 0;
`;

const SearchBarWrpper = styled.div`
  height: 34px;
  display: flex;
  width: 100%;
  max-width: 450px;

  & input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #353340;
    border-radius: 8px;
    font-family: var(--body-font);
    font-size: 14px;
    font-weight: 500;
    padding: 0 40px 0 16px;
    box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 96%;
    color: #fff;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  flex-shrink: 0;
  margin-left: auto;

  & svg {
    width: 10px;
    flex-shrink: 0;
    color: white;
  }

  & img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 50%;
  }

  & p {
    color: #fff;
    font-size: 14px;
    margin: 0 6px 0 12px;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <SearchBarWrpper>
        <input type="text" placeholder="Search" />
      </SearchBarWrpper>
      <UserWrapper>
        <img
          className="user-img"
          src="https://images.unsplash.com/photo-1587918842454-870dbd18261a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=943&q=80"
          alt=""
        />
        <p>Thomas</p>
        <svg viewBox="0 0 492 492" fill="currentColor">
          <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
        </svg>
      </UserWrapper>
    </HeaderWrapper>
  );
}
