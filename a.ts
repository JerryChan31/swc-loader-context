console.log('a.js entry')
import { moduleD } from './d.cjs'
moduleD.instance.init()

console.log('a.js before B')
import B from "./b";
const bInstance = new B()
bInstance.exec()