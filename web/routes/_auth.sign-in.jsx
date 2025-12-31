import { SignInComponent } from "../components/auth/sign-in";
import { useNavigate, useOutletContext } from "react-router";

export default function () {
  const { gadgetConfig } = useOutletContext();

  const navigate = useNavigate();
  const options = {
    onSuccess: () => navigate(gadgetConfig.authentication.redirectOnSuccessfulSignInPath),
  };

  return <SignInComponent options={options} />;
}