let continuar = true;

while (continuar) {

    let nome = prompt("Digite o nome do herói: ");

    let Xp;
    while (true) {
        Xp = parseInt(prompt("Digite a quantidade de XP do herói (um número positivo): "));
        if (Xp >= 0) {
            break;  
        } else {
            alert("Por favor, insira um valor de XP válido (não-negativo).");
        }
    }

  
    let nivel;

 
    if (Xp < 1000) {
        nivel = "Ferro";
    } else if (Xp >= 1001 && Xp <= 2000) {
        nivel = "Bronze";
    } else if (Xp >= 2001 && Xp <= 5000) {
        nivel = "Prata";
    } else if (Xp >= 5001 && Xp <= 7000) {
        nivel = "Ouro";
    } else if (Xp >= 7001 && Xp <= 8000) {
        nivel = "Platina";
    } else if (Xp >= 8001 && Xp <= 9000) {
        nivel = "Ascendente";
    } else if (Xp >= 9001 && Xp <= 10000) {
        nivel = "Imortal";
    } else if (Xp >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "XP inválido";  
    }


    console.log("O herói de nome", nome, "está no nível de", nivel);


    let resposta = prompt("Deseja classificar outro herói? (s/n)");

    if (resposta === "s") {
        continuar = true;
    } else if (resposta === "n") {
        continuar = false; 
    } else {
        alert("Resposta inválida! O programa será encerrado.");
        continuar = false; 
    }
}

console.log("Programa encerrado.");
