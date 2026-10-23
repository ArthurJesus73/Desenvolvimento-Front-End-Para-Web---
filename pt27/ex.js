//Modo 1: Lê como texto e depois converter.
let a;
let aux = prompt("Digite o valor de a:", "");
a=parseInt(aux, 10);

//Modo 2: Combina leitura e conversão.
let b = parseInt(prompt("Digite o valor de b: ", ""),10);
//Parasentes garantem soma antes da concatenação.
alert(a+" + "+b+" = "+(a+b));
alert('${a}+${b}=${a+b}');
console.log("Soma: ", a + b);