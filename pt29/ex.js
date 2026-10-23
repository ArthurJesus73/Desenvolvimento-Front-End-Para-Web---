//lê um numero: aceita ponto ou virgula como separador decimal.
//Cancelamento e entrada invalidos são sinalizados para a nova tentativa.
function lerNumero(mensagem, inteiro=false){
    const texto = prompt (mensagem, "");
    if(texto === null) throw new error ("Entrada camcelada. execute novamente para tentar. ");
    const normalizado = texto.trim().replace(",",".");
    const numero = Number (normalizado);

    if (normalizado === "" || !Number.isFinite(numero)) {
        throw new error ("Digite um numero valida. ");

    }

    if (inteiro && !Number.isFinite(numero)) {
        throw new error ("digite um numero inteiro.");
    }
    

    return numero; 
}

const n1 = lerNumero("Digite o primeiro numero real: ");
const n2 = lerNumero("Digite o segundo numero real: ");
const n3 = lerNumero("Digite o terceiro numero real: ");
const n4 = lerNumero("Digite o Quarto numero real: ");
const media = (n1+n2+n3+n4)/4;
document.write(' Média  aritimetica: ', media);