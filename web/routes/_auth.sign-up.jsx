import { SignUpComponent } from "../components/auth/sign-up";
import { Link, useLocation, useNavigate, useOutletContext } from "react-router";

export default function () {
  const { gadgetConfig } = useOutletContext();

  const { search } = useLocation();
  const navigate = useNavigate();

  return <SignUpComponent />;
}