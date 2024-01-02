# @rory-prettier-config
- Shareable prettier config compiled to cjs and mjs
- Easy to set simple prettier config to your toy project

# How to use
step1) Install this package
```
yarn add --dev @rorysa/prettier-config  
```

step2) make the file `.prettierrc.js` and write code like below
```
// If you use 'ESM'
import config from '@rorysa/prettier-config';
export default config

// If you use 'CJS'
module.exports = require('@rorysa/prettier-config');
```

# Make Log
