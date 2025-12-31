import { applyParams, save, ActionOptions } from "gadget-server";

// Powers the form in the 'sign up' page

/** @type { ActionRun } */
export const run = async ({ params, record, logger, api, session }) => {
  // Applies new 'email' and 'password' to the user record and saves to database

  // // // THIS HAS BEEN COMMMENTED OUT TO DISABLE USER SIGNUP. REMOVE IF PEOPLE SHOULD BE ABLE TO SIGN UP
  // applyParams(params, record);
  // record.lastSignedIn = new Date();
  // await save(record);
  // // // END OF COMMMENT

  if (record.emailVerified) {
    // Assigns the signed-in user to the active session
    session?.set("user", { _link: record.id });
  }
  return {
    result: "ok"
  };
};

/** @type { ActionOnSuccess } */
export const onSuccess = async ({ params, record, logger, api, session }) => {
  if (!record.emailVerified) {
    // Sends verification email by calling api/models/users/actions/sendVerifyEmail.js
    await api.user.sendVerifyEmail({ email: record.email });
  }
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
  returnType: true,
  triggers: {
    googleOAuthSignUp: true,
    emailSignUp: true,
  },
};
