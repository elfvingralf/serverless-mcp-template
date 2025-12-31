import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

/**
 * Create MCP server for weather API middleware
 * @param {import("fastify").FastifyRequest} request
 */
export const createMCPServer = async (request) => {
  const mcpServer = new McpServer({
    name: "weather-mcp",
    version: "1.0.0",
  });

  const logger = request.logger;

  mcpServer.tool(
    "getCurrentWeather",
    "Get current weather conditions for a location. Accepts city names, addresses, or coordinates.",
    {
      location: z.string().describe("Location to get weather for (e.g., 'New York', 'London,UK', '40.7128,-74.0060')"),
    },
    async ({ location }) => {
      logger.info({ location }, "Weather request received");

      const apiKey = process.env.WEATHER_API_KEY;

      if (!apiKey) {
        return {
          content: [{ type: "text", text: "Error: WEATHER_API_KEY environment variable not set" }],
        };
      }

      try {
        const encodedLocation = encodeURIComponent(location);
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}/today?unitGroup=metric&include=current&key=${apiKey}&contentType=json`;

        const response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text();
          return {
            content: [{ type: "text", text: `Weather API error: ${response.status} - ${errorText}` }],
          };
        }

        const data = await response.json();
        const current = data.currentConditions;

        const weather = {
          location: data.resolvedAddress,
          temperature: current.temp,
          feelsLike: current.feelslike,
          humidity: current.humidity,
          conditions: current.conditions,
          windSpeed: current.windspeed,
          windDirection: current.winddir,
          visibility: current.visibility,
          uvIndex: current.uvindex,
          cloudCover: current.cloudcover,
          sunrise: current.sunrise,
          sunset: current.sunset,
        };

        logger.info({ location, weather }, "Weather response");

        return {
          content: [{ type: "text", text: JSON.stringify(weather, null, 2) }],
        };
      } catch (error) {
        logger.error({ error }, "Failed to fetch weather data");
        return {
          content: [{ type: "text", text: `Error fetching weather: ${error.message}` }],
        };
      }
    }
  );

  return mcpServer;
};