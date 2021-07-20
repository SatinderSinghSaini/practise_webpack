// import {getLib1Message} from "./lib1.js"
// export function getLib2Message(){
//     return getLib1Message() +" & "+ getMessage();
// }
// function getMessage(){
//     return "Method in Module 2";
// }
import { func_m11 } from "./lib1";

export let func_m21 = function(){
    return func_m11() + " and " + func_m22();
}
let func_m22 = function(){
    return "Method in Module 2";
}