import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://mcp-for-keat.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "xd29miNq4m0q",
  fields: {
    user: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "z1nX_L7VleiH",
    },
  },
};
