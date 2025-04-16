// Objeto de números e nomes dos compradores
const container = document.getElementById('rifa-container');
const numeros = [];
const nomes = {
    1: "João",
    2: "Maria",
    3: "Carlos",
    4: "Ana",
    5: "Felipe",
    6: "Luana",
    7: "Rafael",
    8: "Beatriz",
    9: "Gabriel",
    10: "Fernanda",
    11: "Lucas",
    12: "Juliana",
    13: "Marcelo",
    14: "Sofia",
    15: "Ricardo",
    16: "Juliano",
    17: "Carla",
    18: "Tatiane",
    19: "Paulo",
    20: "Isabela",
    21: "Eduardo",
    22: "Carolina",
    23: "Pedro",
    24: "Renata",
    25: "Gustavo",
    26: "Patrícia",
    27: "Victor",
    28: "Simone",
    29: "André",
    30: "Fernanda",
    31: "Roberto",
    32: "Luciana",
    33: "Fernando",
    34: "Aline",
    35: "Tiago",
    36: "Mariana",
    37: "Carlos Eduardo",
    38: "Cláudia",
    39: "Vinícius",
    40: "Ester",
    41: "Fábio",
    42: "Marcos",
    43: "Michele",
    44: "Juliana",
    45: "Paula",
    46: "Otávio",
    47: "Tatiane",
    48: "Cibele",
    49: "Lúcia",
    50: "Gustavo",
    51: "Roberta",
    52: "José",
    53: "Cíntia",
    54: "Luciano",
    55: "Simone",
    56: "Wagner",
    57: "Sabrina",
    58: "Renan",
    59: "Adriana",
    60: "Mauro",
    61: "Liliane",
    62: "Tiago",
    63: "Roberta",
    64: "Eduardo",
    65: "Marcel",
    66: "Bianca",
    67: "Vinícius",
    68: "Tatiane",
    69: "Lucas",
    70: "Fernanda",
    71: "Luciana",
    72: "Davi",
    73: "Marcos",
    74: "Cláudio",
    75: "Mariana",
    76: "Carmen",
    77: "Daniela",
    78: "Juliana",
    79: "Ricardo",
    80: "Carla",
    81: "Alberto",
    82: "Marcelo",
    83: "Juliana",
    84: "Miriam",
    85: "Tânia",
    86: "Marcio",
    87: "Raul",
    88: "Marisa",
    89: "Robson",
    90: "Leandro"
};

// Gerar os números de 1 a 90 e associar o nome
for (let i = 1; i <= 90; i++) {
    const numDiv = document.createElement('div');
    numDiv.classList.add('numero');
    numDiv.textContent = i;
    numDiv.id = `numero-${i}`;
    container.appendChild(numDiv);

    // Verifique se o nome já foi adicionado, caso contrário, associe um valor padrão.
    if (!nomes[i]) {
        nomes[i] = `Comprador ${i}`;
    }

    numeros.push(i);
}

// Função para sortear um número aleatório
function sortear() {
    // Desabilitar o botão de sorteio após o clique
    document.querySelector('.btn-sorteio').disabled = true;

    // Limpar o resultado anterior
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('erro');
    resultadoDiv.textContent = '';

    // Sortear um número aleatório
    const numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)];

    // Obter o nome do comprador associado ao número sorteado
    const nomeComprador = nomes[numeroSorteado];

    // Exibir o número sorteado e o nome do comprador
    resultadoDiv.innerHTML = `Número Sorteado: ${numeroSorteado}<br>Comprador: ${nomeComprador}`;

    // Destacar o número sorteado na tela
    setTimeout(() => {
        const numSorteadoDiv = document.getElementById(`numero-${numeroSorteado}`);
        numSorteadoDiv.style.backgroundColor = '#4caf50';
        numSorteadoDiv.style.color = 'white';
        numSorteadoDiv.style.border = '2px solid #388e3c';
        numSorteadoDiv.style.transform = 'scale(1.2)';
    }, 200);

    // Reabilitar o botão de sorteio após o sorteio
    setTimeout(() => {
        document.querySelector('.btn-sorteio').disabled = false;
    }, 3000);
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    // Resetar todos os números
    const numerosDivs = document.querySelectorAll('.numero');
    numerosDivs.forEach(num => {
        num.style.backgroundColor = '#90caf9';
        num.style.color = '#1e3a8a';
        num.style.border = '2px solid #1e3a8a';
        num.style.transform = 'scale(1)';
    });

    // Limpar o resultado e habilitar o botão novamente
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = '';
    document.querySelector('.btn-sorteio').disabled = false;
}
