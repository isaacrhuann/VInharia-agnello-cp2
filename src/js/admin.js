// Variáveis para armazenar até 5 vinhos (limite do grupo de até 5 pessoas/cadastros sem arrays)
let nome1, safra1, quant1;
let nome2, safra2, quant2;
let nome3, safra3, quant3;
let nome4, safra4, quant4;
let nome5, safra5, quant5;

let totalCadastrados = 0;
let totalEstoqueBaixo = 0;
let safraMaisAntiga = 9999;
let nomeVinhoMaisAntigo = "";

// 1. Função para validar se o texto não está vazio
function validarTexto(mensagem) {
    while (true) {
        let nome = prompt(mensagem);
        if (nome === null) {
            return null;
        }
        nome = nome.trim();
        if (nome !== "") {
            return nome;
        }            
        alert ("O nome do vinho nao pode ficar vazio!");
    }
}
// 2. Função para validar números inteiros positivos
function validarNumero(mensagem, minimo, maximo) {
    while (true) {
        let entrada = prompt(mensagem);
    
    if (entrada === null) {
        return null;
    }
    
    let numero = Number(entrada);

    if (
        entrada.trim() !== "" &&
        Number.isInteger(numero) &&
        numero >= minimo &&
        numero <= maximo
    ) {
        return numero;
    }
    
    alert(`Por favor, insira um número inteiro valido`);
    }
}
// 3. Função para verificar se o estoque é baixo (menos de 5 unidades)
function verificarEstoqueBaixo(quantidade) {
    return quantidade < 5;
}

// 4. Função para classificar o vinho de acordo com a safra
function classificarVinho(safra) {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

// 5. Função principal de cadastro
function iniciarCadastro() {
    let continuar = true;

    while (continuar && totalCadastrados < 5) {
        let numeroAtual = totalCadastrados + 1;
        
        let nome = validarTexto("Digite o nome do vinho " + numeroAtual + ":");
        if (nome === null) break;

        let anoAtual = new Date().getFullYear();

        let safra = validarNumero(
            "Digite a safra do vinho " + numeroAtual + ":",
            1,
            anoAtual
        );
        if (safra === null) break;

        let quantidade = validarNumero(
            "Digite a quantidade em estoque:",
            0,
            Number.MAX_SAFE_INTEGER
        );
        if (quantidade === null) break;

        // Verificação de estoque baixo
        if (verificarEstoqueBaixo(quantidade)) {
            totalEstoqueBaixo++;
        }

        // Verificação da safra mais antiga
        if (safra < safraMaisAntiga) {
            safraMaisAntiga = safra;
            nomeVinhoMaisAntigo = nome;
        }

        // Atribuição às variáveis individuais
        if (numeroAtual === 1) {
            nome1 = nome; safra1 = safra; quant1 = quantidade;
        } else if (numeroAtual === 2) {
            nome2 = nome; safra2 = safra; quant2 = quantidade;
        } else if (numeroAtual === 3) {
            nome3 = nome; safra3 = safra; quant3 = quantidade;
        } else if (numeroAtual === 4) {
            nome4 = nome; safra4 = safra; quant4 = quantidade;
        } else if (numeroAtual === 5) {
            nome5 = nome; safra5 = safra; quant5 = quantidade;
        }

        totalCadastrados++;

        let classificacao = classificarVinho(safra);

        let statusEstoque = verificarEstoqueBaixo(quantidade)
            ? "BAIXO"
            : "NORMAL";

        let mensagem = `Vinho: ${nome}
        Safra: ${safra}
        Classificação: ${classificacao}
        Quantidade: ${quantidade}
        Estoque: ${statusEstoque}`;

        console.log(mensagem);
        alert(mensagem);

        if (totalCadastrados < 5) {
            let resposta = prompt("Deseja cadastrar outro vinho? (s/n)");

        if (resposta === null) {
            continuar = false;
        } else {
            resposta = resposta.trim().toLowerCase();

            if (resposta !== "s" && resposta !== "sim") {
                continuar = false;
            }
        }
        } else {
            alert("Limite máximo de 5 cadastros atingido.");
            continuar = false;
        }
    }

    exibirResumo();
}

// 6. Exibição do Resumo Final
function exibirResumo() {
    let resumo = `=== RESUMO DE CADASTRO ===\n` +
                 `Total de vinhos cadastrados: ${totalCadastrados}\n` +
                 `Vinhos com estoque baixo (< 5): ${totalEstoqueBaixo}\n`;

    if (totalCadastrados > 0) {
        resumo += `Vinho mais antigo: ${nomeVinhoMaisAntigo} (Safra: ${safraMaisAntiga})`;
    } else {
        resumo += `Nenhum vinho foi cadastrado.`;
    }

    alert(resumo);
    console.log(resumo);
}

// Executar o cadastro
iniciarCadastro();