# Nature Cardkit

> Custom [cardkit](https://times.github.io/cardkit/) configuration for @naturenews

`uglifyjs-webpack-plugin` is removed as it is depreciated with security vulnerabilities. The suggeseted replacement, `terser-webpack-plugin` is not compatable with CardKit. `app.js` is not being minimised at the moment and is 2mb in size. Not ideal, but perhaps ok for internal use.

CardKit documentation: https://times.github.io/cardkit/code/index.html

I'm using forked versions of CarkKit and RVG.js to allow extra SVG attributes, such as opacity:

- https://github.com/chris-creditdesign/cardkit
- https://github.com/chris-creditdesign/rvg.js

Hosted online as a github page here: https://springernature.github.io/nrg-cardkit/

### Installation & usage

- Clone this repo
- Install dependencies: `$ npm install`

- Run locally: `$ npm run dev`
- Build for distribution: `$ npm run dist`

### Development

All configuration can be found in `./src/configuration/main.js`. App logic can be found in `./src/app.js`.

### Deploy to GitHub pages

    sh gh-page-deploy.sh dist
