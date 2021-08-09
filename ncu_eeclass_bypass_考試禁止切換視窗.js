// ==UserScript==
// @name         ncu eeclass exam bypass window change
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       13579
// @match        https://ncueeclass.ncu.edu.tw/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.top.document.hasFocus = function(){return true;};
})();
