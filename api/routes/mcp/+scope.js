import { Server } from "gadget-server";

/**
 * Route plugin for mcp/*
 *
 * @see https://www.fastify.dev/docs/latest/Reference/Server
 *
 * @param { Server } server */
export default async function (server) {
  server.setScopeCORS({
    origin: true,
  });
}