const base64 = require('base-64');
global.btoa = global.btoa || base64.encode;
global.atob = global.atob || base64.decode;
