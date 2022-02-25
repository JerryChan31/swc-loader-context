"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moduleD;
(function (moduleD) {
  class D {
    constructor() {
      console.log('d.js constructor')
    }
    init() {
      console.log('d.js init')
    }
  }
  moduleD.instance = new D()
})(moduleD = exports.moduleD || (exports.moduleD = {}));