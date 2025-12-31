import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://mcp-for-keat.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "DataModel-AppAuth-User",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "6GJLKDMUQg8v",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "m9xtzl2Liyju",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "pBp4_8f1OlfL",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "TrDb988kO4gi",
    },
    firstName: { type: "string", storageKey: "CHC0fUVKmHIZ" },
    googleImageUrl: { type: "url", storageKey: "aUCeOPOuUejL" },
    googleProfileId: { type: "string", storageKey: "fwev0ubDDx7S" },
    lastName: { type: "string", storageKey: "kiudfc4W07e2" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "1Uxfvgq_rllK",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "TA3hZ8wE7oLU",
    },
    profilePicture: {
      type: "file",
      allowPublicAccess: true,
      storageKey: "aIW3iTRnlzj4",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "v8XoYgGhAI3e",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "AUWpOk9Bnk38",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "T0DUzr3lMwu5",
    },
  },
};
