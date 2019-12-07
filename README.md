# Tomato Clock - Browser Extension

[![Node CI](https://github.com/samueljun/tomato-clock/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/samueljun/tomato-clock/actions?query=workflow%3A%22Node+CI%22+branch%3Amaster)

Tomato Clock is a simple browser extension for managing your productivity. Use the extension to break down your work into 25 minute 'Tomato' intervals separated by short breaks. Use the long break after completing four Tomato intervals.

Features:

- Customizable timer lengths
- Browser notifications
- Stat tracking

You can customize the length of the Tomatoes and breaks in the extension page. The extension uses the default browser notification system, accompanied by a sound, to let you know when the timer is over. The extension also features stats for tracking how many Tomatoes you complete. Your stats are synced across devices using the browser's cloud storage support.

Due to a trademark complaint, the extension was renamed from Pomodoro Clock to Tomato Clock.

Please file any issues or feature requests at https://github.com/samueljun/tomato-clock/issues.

## Installation

- [Firefox AMO](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/)
- [Chrome Web Store](https://chrome.google.com/webstore/detail/tomato-clock/enemipdanmallpjakiehedcgjmibjihj)

## Development

1. [Install node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2. Install the required node modules:

```sh
npm install
```

3. Run the following command so that webpack can watch and recompile the `/src` files live to the `/dist` folder:

```sh
npm run watch
```

### Firefox

To run the extension with live reloading in a clean Firefox instance, run the following command in a separate terminal:

```sh
npm run watch-firefox
```

To temporarily load the extension in a normal Firefox instance:

1. Go to `about:debugging`
2. Click `Load Temporary Add-on`
3. Load the `src` folder

### Chromium

1. Go to `chrome://extensions/`
2. Enable developer mode
3. Click `Load unpacked extension...`
4. Load the `/dist` folder

### Updating the version number

1. In a single commit, update the `"version"` in the `manifest.json` file based on [semver](http://semver.org/). The commit message should be something along the following: `Bump manifest to 5.0.4`.

2. Then `npm version {patch/minor/major}` to bump the package.json version and tag the commit:

```sh
npm version patch
```

3. Finally push the commits and tag to origin.

```sh
git push && git push --tags
```

### Building submission file

Run the following command so that webpack can recompile the `/src` files in production mode to the `/dist` folder:

```sh
npm run build
```
