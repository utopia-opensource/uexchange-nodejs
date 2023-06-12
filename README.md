

![logo](logo.png)

The lib itself consists of two parts — `core.js` where's located API reference and core helpers; and `<platform-name>.js` where is located platform-depended code.
Usage:
1. Copy `core.js` and `node.js` to your project.
1. Import API (default export) from `node.js`. Example:
    ```js
    import API from '../api/browser.js';
    ```
1. Call methods directly from `API` object. Example:
    ```js
    await API.login("pubkey", "password", "2fa_pin")
    ```
That's it. Enjoy :)

---
[![udocs](https://github.com/Sagleft/ures/blob/master/udocs-btn.png?raw=true)](https://udocs.gitbook.io/utopia-api/)
