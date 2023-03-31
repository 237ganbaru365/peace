import { Navigate } from "react-router-dom";

type AuthProtectProps = {
  children: React.ReactNode;
};
const AuthProtect = ({ children }: AuthProtectProps) => {
  // user state check using contextAPI or redux
  const isAuth: boolean = true;

  return <>{isAuth ? children : <Navigate to="/login" />}</>;
};
