# Figma ChatGPT

This is a very simple implementation of the OpenAI gpt-3.5-turbo model in Figma. I'm a designer, not a developer, so code could probably be optimised in many ways. Don't hesitate to create a PR if you want to contribute.

## Development guide

*This plugin is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).*

### Pre-requisites

- [Node.js](https://nodejs.org) – v18
- [Figma desktop app](https://figma.com/downloads/)
- [OpenAI API Key](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key)

### Build the plugin

Create a .enc file, and add your OpenAI API key like this OPENAI_API_KEY="Your OpenAI API key here" 

To build the plugin:

```
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/plugin-docs/manifest/) file and a `build/` directory containing the JavaScript bundle(s) for the plugin.

To watch for code changes and rebuild the plugin automatically:

```
$ npm run watch
```

### Install the plugin

1. In the Figma desktop app, open a Figma document.
2. Search for and run `Import plugin from manifest…` via the Quick Actions search bar.
3. Select the `manifest.json` file that was generated by the `build` script.

### Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console, search for and run `Open Console` via the Quick Actions search bar.

## See also

- [Create Figma Plugin docs](https://yuanqing.github.io/create-figma-plugin/)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins#readme)
