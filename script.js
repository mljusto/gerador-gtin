const recentCodes = [];

function calcularDigitoVerificador(gtinBase) {
    let soma = 0;
    for (let i = 0; i < gtinBase.length; i++) {
        const numero = parseInt(gtinBase[i]);
        soma += i % 2 === 0 ? numero * 1 : numero * 3;
    }
    const resto = soma % 10;
    return resto === 0 ? 0 : 10 - resto;
}

function gerarGTIN() {
    const prefixoBrasil = "789"; // Prefixo para produtos brasileiros
    const codigoEmpresa = String(Math.floor(Math.random() * 100000)).padStart(5, "0");
    const codigoProduto = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
    const gtinBase = prefixoBrasil + codigoEmpresa + codigoProduto;
    const digitoVerificador = calcularDigitoVerificador(gtinBase);
    const gtinFinal = gtinBase + digitoVerificador;

    // Exibir o GTIN gerado
    const outputDiv = document.getElementById("output");
    outputDiv.style.display = "block";
    outputDiv.innerText = `GTIN Gerado: ${gtinFinal}`;

    // Atualizar lista de códigos recentes
    atualizarRecentCodes(gtinFinal);
}

function atualizarRecentCodes(codigo) {
    const codesList = document.getElementById("codes-list");
    const recentCodesDiv = document.getElementById("recent-codes");

    if (recentCodes.length === 5) {
        recentCodes.shift(); // Remove o código mais antigo
    }
    recentCodes.push(codigo);

    // Exibir os últimos 5 códigos
    codesList.innerHTML = "";
    recentCodes.forEach((code) => {
        const li = document.createElement("li");
        li.textContent = code;
        codesList.appendChild(li);
    });

    recentCodesDiv.style.display = "block";
}
