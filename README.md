# @rory-prettier-config
- Shareable prettier config compiled to cjs and mjs
- Easy to set simple prettier config to your toy project

# How to use
step1) Install package
```
yarn add --dev @rorysa/prettier-config  
```

step2) Make `.prettierrc.js` and write code below
```
// If you use 'ESM'
import config from '@rorysa/prettier-config';
export default config

// If you use 'CJS'
module.exports = require('@rorysa/prettier-config');
```

# Makerlog
https://rory-log.vercel.app/prettier-config-module
