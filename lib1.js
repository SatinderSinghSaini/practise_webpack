// export function getLib1Message(){
//     return getMessage();
// }
// function getMessage(){
//     return "Method in Module 1";
// }
export let func_m11 = function(){
    return func_m12();
}
let func_m12 = function(){
    return "Method in Module 1";
}