// media queries from OpenAI example repo
// https://github.com/openai/openai-apps-sdk-examples/blob/main/src/media-queries.ts

function matchMediaQuery(query) {
  return window.matchMedia(query).matches;
}

function createMediaQueryFn(query) {
  return () => matchMediaQuery(query);
}

export const prefersReducedMotion = createMediaQueryFn("(prefers-reduced-motion: reduce)");

export const isPrimarilyTouchDevice = createMediaQueryFn("(pointer: coarse)");

export const isHoverAvailable = createMediaQueryFn("(hover: hover)");