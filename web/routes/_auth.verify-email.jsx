import { Link, useOutletContext } from "react-router";

export const loader = async ({ context, request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  try {
    await context.api.user.verifyEmail({ code });
    return { success: true, error: null };
  } catch (error) {
    return {
      error: { message: error.message },

      success: false,
    };
  }
};

export default function ({ loaderData }) {
  const { gadgetConfig } = useOutletContext();

  const { success, error } = loaderData;

  if (error) {
    return <p className="format-message error">{error.message}</p>;
  }

  return success ? (
    <p className="format-message success">
      Email has been verified successfully. <Link to={gadgetConfig.authentication.signInPath}>Sign in now</Link>
    </p>
  ) : null;
}