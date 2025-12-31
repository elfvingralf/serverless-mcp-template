# Serverless MCP Template

A simple MCP (Model Context Protocol) server template that acts as middleware for a weather API. Built on [Gadget.dev](https://gadget.dev) for serverless deployment.

When connected to an MCP client (like Claude Desktop or Cursor), you can ask for the weather at any location and the MCP server will fetch and return current conditions.

This is a simplified MCP server with no bells and whistles, intended for educational purposes.

## Prerequisites

- A free [Gadget.dev](https://gadget.dev) account
- A free API key from [Visual Crossing](https://www.visualcrossing.com)

## Setup

### 1. Create a Gadget App

1. Go to [gadget.new](https://gadget.new)
2. Select the **ChatGPT app** template
3. Select **"Yes, enable auth"** option
4. Click **Continue**
5. Name your app (this can be changed later)
6. Change the language from TypeScript (default) to **JavaScript**

### 2. Replace the MCP File

Copy the `mcp.js` file from the `/api/` folder in this repo and replace the `mcp.js` file in the `/api/` folder in your Gadget app.

Alternatively, you can fork this entire app by using the [Gadget CLI](https://docs.gadget.dev/guides/development-tools/cli) to sync your app's files locally and replace them with the files in this repo. This README doesn't cover all the steps for this approach.

### 3. Add Your Weather API Key

1. Go to **Settings** in your Gadget app
2. Click **Environment Variables**
3. Add a new variable named `WEATHER_API_KEY`
4. Go to your [Visual Crossing account page](https://www.visualcrossing.com/account/) and copy your API key
5. Paste the API key into the environment variable value field
6. Click **Save**

## Usage

Add this MCP server to your MCP client config (e.g., Claude Desktop, Cursor). Replace `your-gadget-app-name` with your actual Gadget app name:

```json
{
  "mcpServers": {
    "weather-checker": {
      "url": "https://your-gadget-app-name--development.gadget.app/mcp",
      "transport": "http"
    }
  }
}
```

Once connected, call the `getCurrentWeather` tool with a location:

```
"What's the weather in Victoria BC?"
```

The MCP server will return current conditions including temperature, humidity, wind speed, and more.

## Production Deployment

Gadget development environments are paused after 60 minutes of inactivity. To keep your MCP server always available, publish your app to production in Gadget.

1. Add your environment variables in the production environment
2. Update your MCP config URL by removing `--development`:

```json
{
  "mcpServers": {
    "weather-checker": {
      "url": "https://your-gadget-app-name.gadget.app/mcp",
      "transport": "http"
    }
  }
}
```

---

Got questions? Reach out to [@ralfelfving](https://twitter.com/ralfelfving)
