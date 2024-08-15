calcularNivel(10, 10);

function calcularNivel(vitorias, derrotas) {
  
    let saldoVitorias = vitorias - derrotas;

   
    if (saldoVitorias < 0) {
        console.log("O herói não está ranqueado.");
        return;
    }
    
    let nivel;

    if (saldoVitorias >= 0 && saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Imortal";
    } else if (saldoVitorias > 100) {
        nivel = "Lendário";
    }

    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`);
}

