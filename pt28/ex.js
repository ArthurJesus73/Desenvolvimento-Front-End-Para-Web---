
function lerNumero(mensagem, inteiro = false) {
    const texto = prompt(mensagem, "");

    if (texto === null) {
        throw new Error("Entrada cancelada. Execute novamente para tentar.");
    }

    const normalizado = texto.trim().replace(",", ".");
    const numero = Number(normalizado);

    if (normalizado === "" || !Number.isFinite(numero)) {
        throw new Error("Digite um número válido.");
    }

    if (inteiro && !Number.isInteger(numero)) {
        throw new Error("Digite um número inteiro.");
    }

    return numero;
}

try {
    const salario = lerNumero("Digite o salário atual:");

    if (salario < 0) {
        throw new Error("Digite um salário igual ou maior que zero.");
    }

    const aumento = salario * 0.25;
    const novoSalario = salario + aumento;

    document.write("Seu aumento foi de: R$ " + aumento.toFixed(2) + "<br>");
    document.write("Seu novo salário é: R$ " + novoSalario.toFixed(2));

} catch (erro) {
    alert(erro.message);
}
