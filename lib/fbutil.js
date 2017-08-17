'use strict';

var admin = require('firebase-admin');
require('colors');

exports.init = function(databaseURL, serviceAccount) {
  console.log('trying to initialize');

admin.initializeApp({
  console.log(admin.credential.cert({
    projectId: "ip-gifty-staging",
    clientEmail: "flashlight@ip-gifty-staging.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCeiOtwv3qdu7Yx\noqcYp7cN0Nx2qTs4YrBOPXIPgowHfIJo+cFg+VwAEvywS026Ygko5OnEAApzXOSG\nvDYIeFDQj9Uto+8q0VvAtlhc3bWOB4gN0N8KsJtedUMAY3ne//cXzb9We8Hm/kwQ\nGJNhnanjmNCMiLvKDMpPZXnnT7emw0OLqGIWXxOY4dvDk0Br6b4cRnnWYicR6D8y\nLuptklwFpLe7a5myVTU4TLfMENOvK+G6NmV9/iU/dOe69AyGjEID+klsbFHe1U0d\npCq9Wqu9H4lNX5fDZ4hCmFenHtgTdXTYVmDn2Wvqu0yh42av9bvCB/GaU2OUXGKt\nbs3zKhp3AgMBAAECgf8K1lFB49T981cBDZ1ekhhxWVW4xtjFgfmLX6fsZ4ArAtfn\nVSti9ajUWHftlTg7BXia0wsn2tjcCf2VOEh5S8A6gZqRBCPVSXp8MfrYXk+K5fjm\n+OBGWsxEKL/rxuEN3XGGrwnlX5BhugB5GTT5900lwcx/ztkHdthdlRJAPbLQM21D\n45+GUXTuHsdwzkNDAQydLUooongLxh/X7lsmwIAG3FAZ5rW4ZiILNl0hP2TY8ABa\nM+1Yi/eDqEE5o3QtpBS7CvbHFUZ7KRii9fzrYKO1TxDt7ceKFrVshkD3AWGhCT4G\nlcyi3kb5HVZEaA4nubNpckq+NSDMEhPrBk9d3T0CgYEA3CLGJgtXLFpl2ufAyhsj\nOhuP33mArcCpQgjv64cj6O1doBFAy5MoInicSWUJxnk7Cj4t48/xsqVRAkaZBR5z\nP4g/BxHlvCNt3mkB7O/rxpC5sZbWr5L0VTRcLhkKu445390KxTMTxfUiczD9mK4P\nZ+65ZTdejwZ/qnLaRFGW3wUCgYEAuFzyfyHU+Y3QttNEg/UZvMo0WvBGAaV3AsII\n4G/SojeSlJEXoHVbGuaF5b0rRlWp6S/nKTIWgFZ/C78PRJnpVNGxGRgCJxQdKIfp\nkAKZ6zvIOqCqbE+ixSgU/dNuId42JlznxFqMZnOFr0jD1GuCCKyUtYA4i1fBSq4c\nLCKu9EsCgYBW6pP56Xhd1sNojyCbq+NYyhEgV0TrVap+nDC+efk/upjA3o8K0euC\n0MREZlRZvPwGq05LKItx0bwOffllAATZDN512CcxBXwX2LYd6wzYtcPbzoathARc\nr/PFb7XBIALR1OCvw98Gxib3/FvksLT8gFFLGXWIWzSFBBwR5XUAUQKBgDNseZdM\ncINLMzRLqYjFDPDD1eanrl83MALs7Fzt0+q7ZX9bGSQAl/Dg6+gw46kyq7oHSosL\nFYumlLlKCZAw/gxSkPtW3wLXcWqkvlkU4Knkeu0fc2nSrKwhifliyA1aVfBNabgz\nKYZKIrfJrBXMBvE0ciZOJXd4esnB1snYwsQRAoGAa07VSGCNcQVpOV0ckVN/Rkrt\n+jtKMj7wfKYk9AInOaolkQDQcT6GIFetVd0aIFKtkBWFSK6c9csnQyWZP6yJYFcx\nIdID7dZiY/5EUeo328vHt0vRCOXnh5ylKGV22u+u+v5jSsC8IVKdCjzP9C5M1y9W\nJRdZUpg3nVD7kVXV8M0=\n-----END PRIVATE KEY-----\n"
  }));
  
  credential: admin.credential.cert({
    projectId: "ip-gifty-staging",
    clientEmail: "flashlight@ip-gifty-staging.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCeiOtwv3qdu7Yx\noqcYp7cN0Nx2qTs4YrBOPXIPgowHfIJo+cFg+VwAEvywS026Ygko5OnEAApzXOSG\nvDYIeFDQj9Uto+8q0VvAtlhc3bWOB4gN0N8KsJtedUMAY3ne//cXzb9We8Hm/kwQ\nGJNhnanjmNCMiLvKDMpPZXnnT7emw0OLqGIWXxOY4dvDk0Br6b4cRnnWYicR6D8y\nLuptklwFpLe7a5myVTU4TLfMENOvK+G6NmV9/iU/dOe69AyGjEID+klsbFHe1U0d\npCq9Wqu9H4lNX5fDZ4hCmFenHtgTdXTYVmDn2Wvqu0yh42av9bvCB/GaU2OUXGKt\nbs3zKhp3AgMBAAECgf8K1lFB49T981cBDZ1ekhhxWVW4xtjFgfmLX6fsZ4ArAtfn\nVSti9ajUWHftlTg7BXia0wsn2tjcCf2VOEh5S8A6gZqRBCPVSXp8MfrYXk+K5fjm\n+OBGWsxEKL/rxuEN3XGGrwnlX5BhugB5GTT5900lwcx/ztkHdthdlRJAPbLQM21D\n45+GUXTuHsdwzkNDAQydLUooongLxh/X7lsmwIAG3FAZ5rW4ZiILNl0hP2TY8ABa\nM+1Yi/eDqEE5o3QtpBS7CvbHFUZ7KRii9fzrYKO1TxDt7ceKFrVshkD3AWGhCT4G\nlcyi3kb5HVZEaA4nubNpckq+NSDMEhPrBk9d3T0CgYEA3CLGJgtXLFpl2ufAyhsj\nOhuP33mArcCpQgjv64cj6O1doBFAy5MoInicSWUJxnk7Cj4t48/xsqVRAkaZBR5z\nP4g/BxHlvCNt3mkB7O/rxpC5sZbWr5L0VTRcLhkKu445390KxTMTxfUiczD9mK4P\nZ+65ZTdejwZ/qnLaRFGW3wUCgYEAuFzyfyHU+Y3QttNEg/UZvMo0WvBGAaV3AsII\n4G/SojeSlJEXoHVbGuaF5b0rRlWp6S/nKTIWgFZ/C78PRJnpVNGxGRgCJxQdKIfp\nkAKZ6zvIOqCqbE+ixSgU/dNuId42JlznxFqMZnOFr0jD1GuCCKyUtYA4i1fBSq4c\nLCKu9EsCgYBW6pP56Xhd1sNojyCbq+NYyhEgV0TrVap+nDC+efk/upjA3o8K0euC\n0MREZlRZvPwGq05LKItx0bwOffllAATZDN512CcxBXwX2LYd6wzYtcPbzoathARc\nr/PFb7XBIALR1OCvw98Gxib3/FvksLT8gFFLGXWIWzSFBBwR5XUAUQKBgDNseZdM\ncINLMzRLqYjFDPDD1eanrl83MALs7Fzt0+q7ZX9bGSQAl/Dg6+gw46kyq7oHSosL\nFYumlLlKCZAw/gxSkPtW3wLXcWqkvlkU4Knkeu0fc2nSrKwhifliyA1aVfBNabgz\nKYZKIrfJrBXMBvE0ciZOJXd4esnB1snYwsQRAoGAa07VSGCNcQVpOV0ckVN/Rkrt\n+jtKMj7wfKYk9AInOaolkQDQcT6GIFetVd0aIFKtkBWFSK6c9csnQyWZP6yJYFcx\nIdID7dZiY/5EUeo328vHt0vRCOXnh5ylKGV22u+u+v5jSsC8IVKdCjzP9C5M1y9W\nJRdZUpg3nVD7kVXV8M0=\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://ip-gifty-staging.firebaseio.com"
});

};

exports.fbRef = function(path) {
   return admin.database().ref().child(path);
};

exports.pathName = function(ref) {
   var p = ref.parent.key;
   return (p? p+'/' : '')+ref.key;
};

exports.isString = function(s) {
  return typeof s === 'string';
};

exports.isObject = function(o) {
  return o && typeof o === 'object';
};

exports.unwrapError = function(err) {
  if( err && typeof err === 'object' ) {
    return err.toString();
  }
  return err;
};

exports.isFunction = function(f) {
  return typeof f === 'function';
};
