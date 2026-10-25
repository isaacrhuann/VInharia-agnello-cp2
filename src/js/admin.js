

    function cadastrarVinho() {

        let nomeVinho = prompt("Qual é o nome do vinho a ser cadastrado?");
        let tipoVinho = prompt("Qual é o tipo de vinho(Tinto, Seco, Suave, Espumante)?");
        let safraVinho = prompt("Qual é o ano da safra do vinho?");
        let quantidadeEstoque = prompt("Qual é a quantidade disponivel no estoque?");
        
        
        alert("Cadrastro realizado! Veja os detalhes no console.");
        alert("A seguir, veja os detalhes do vinho no console."); 
    
        console.log("=== DADOS DO VINHO CADASTRADO ===");
        console.log("Nome do vinho: " + nomeVinho);
        console.log("Tipo do vinho: " + tipoVinho);
        console.log("Safra do vinho: " + safraVinho);
        console.log("Quantidade em estoque: " + quantidadeEstoque + " Unidade(s) ");
        console.log("========================================");

    
    } 
    

