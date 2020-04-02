export const pi = 3.1416;

// En este archivo puedo tener código Javascript que no exporto... es como código privado del módulo
var variableLocalPrivada = 222;

function validateEmail(email) {
  if(email.indexOf('@') != -1) {
    return true;
  }
  return false
}



export var algo = function () { alert('123');}

export default validateEmail;
