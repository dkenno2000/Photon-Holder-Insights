<h1 align="center" style="font-weight: bold;">Photon Holder Insights: Wallet Balances & Advanced Stats</h1>

<p align="center"><b>Shows each holder's wallet balance and advanced holder statistics on Photon. Built for serious memecoin traders.</b></p>

<p align="center">
  <img src="https://lh3.googleusercontent.com/O-LRxOJyGSVr2R8xAMVzf2tXZp3abf_dtL3_aBDiwTXXCs1oHf34YxgAlZxkeTpYj7dW14aUX48IXl9aEoDVxsGZf7E=s800-w800-h500" width="400px">
  <img src="https://lh3.googleusercontent.com/JZBELidE15YGPKW0MQ16S_chrt2AMd8bfUEvgeOA_qFfxy8hxbhGIReZ225yRapz31c8Y3nwwgDrt6o13KmgWe2jvA=s1280-w1280-h800" width="400px">
</p>

<hr>

Decided to open source all my previous Chrome extensions. Use the code anyway you want, just give credit.
<br>
<br>

<h2 id="releases">💾 Releases</h2>

- 🌐 <a href="https://chromewebstore.google.com/detail/photon-holder-insights-wa/dcpmnpnodogloianchnkecgllmkdhhgn">Download from Chrome Web Store</a>
- 💾 <a href="https://github.com/dkenno2000/Windows-Alerts-for-Photon/releases/download/Photon/alerts_for_photon-v1.1.zip">Download the latest release from Github</a>

<h2 id="features">🚩 Key Features</h2>

- Analyze The Holders, Detect Manipulation
- See every holder’s wallet balance (SOL and USD)
- Interactive pie charts show top holders by type and how much supply they hold
- Quickly spot whales, risks and detect supply manipulation

<br>

Uses amCharts 5 library for drawing chart data.

```bash
  import * as am5 from "@amcharts/amcharts5";
  import * as am5percent from "@amcharts/amcharts5/percent";
  import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
```

Browser must be allowed to show notifications in the OS settings. On my system, Windows had this disabled by default.

<h2 id="started">⚙️ Getting started</h2>
<h3>Prerequisites</h3>

This project uses Webpack module bundler

- [Webpack](https://webpack.js.org/)

```bash
  npm init
  npm install --save-dev webpack webpack-cli
```

You'll also need:
- amCharts 5.x lib from [amcharts.com](https://www.amcharts.com/)
- [Chart.js v4.4.8](https://github.com/chartjs/Chart.js)

To build it run:

```bash
  npm i chart.js
  npx webpack
```

Make sure to modify the included webpack.config to target 'web':

```bash
  target: "web", // Ensure it's targeting web for a browser environment
```

Change the path to point where your /node/modules/ folder is (don't forget to get Chart.js & amCharts!):
```bash
  modules: [path.resolve("D:/node_modules"), "node_modules"],
```

<h3>Installation</h3>

- Install from the Chrome Web Store: Link above
- Install locally: Manage Extensions -> Enable Developer Mode -> Load Unpacked -> Select the unzipped folder

<h2 id="contribute">⚠️ License</h2>

Released under the GPL-3 license. Use as you please, but give credit where credit is due.
