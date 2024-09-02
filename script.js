//Exercicio 1

let idadeSoma = 0;
let quantidadeAlunos = 0;
let idade;

while (true) {
  idade = parseInt(prompt("Digite a idade do aluno (ou 999 para terminar):"));

  if (idade === 999) {
    break;
  }
}

idadeSoma = idade;
quantidadeAlunos++;

let mediaIdade = quantidadeAlunos > 0 ? idadeSoma / quantidadeAlunos : 0;

alert("Numero de alunos na turma:" + quantidadeAlunos);
alert("Media de idade dos alunos:" + mediaIdade.toFixed(2));

// exercicio 2

let salarioHomem = 0;
let salarioMulher = 0;

let continuar = "s";

do {
  let salario = parseFloat(prompt("Digite o salário do funcionário:"));

  if (isNaN(salario) || salario <= 0) {
    alert("Salário inválido. Por favor, digite um valor numérico positivo.");
    continue; // Pular para a próxima iteração do loop
  }

  let sexo = prompt("Digite o sexo do funcionário (M ou F):").toUpperCase();

  if (sexo === "M") {
    salarioHomem += salario;
  } else if (sexo === "F") {
    salarioMulher += salario;
  } else {
    alert("Sexo inválido. Digite 'M' ou 'F'.");
  }

  continuar = prompt("Deseja continuar? (S/N):").toLowerCase();
} while (continuar === "s");

alert("Total de salários pagos aos homens: R$ " + salarioHomem.toFixed(2));
alert("Total de salários pagos às mulheres: R$ " + salarioMulher.toFixed(2));

//Exercicio 3

let valorInicial = parseInt(prompt("Digite o Primeiro Valor:"), 10);
let valorFinal = parseInt(prompt("Digite o Ultimo valor:"), 10);
let incremento = parseInt(prompt("Digite o incremento:"), 10);

if (incremento === 0) {
  alert("O incremento não pode ser zero");
} else {
  let contagem = "";
  for (let i = valorInicial; i <= valorFinal; i += incremento) {
    contagem += i + ", ";
  }
  alert("Contagem: " + contagem.trim() + "Acabou");
}

//Exercico 4

let nome = prompt("Digite o nome da cliente ");
let sexo = prompt("Digite o sexo do cliente (M OU F):").toUpperCase();
let valor = parseFloat(prompt("Digite o valor da compra"));

if (isNaN(valor) || valor < 0) {
  alert("Valor Invalido,Insira o valor positivo.");
} else {
  let valorFinal;

  if (sexo === "M") {
    valorFinal = valor - valor * 0.05;
  } else if (sexo === "F") {
    valorFinal = valor - valor * 0.13;
  } else {
    valorFinal = valor;
    alert("Sexo Invalido, sem desconto aplicado");
  }
  alert(
    "Nome do cliente: " +
      nome +
      "\nValor original das compras: R$ " +
      valor.toFixed(2) +
      "\nValor final com desconto: R$ " +
      valorFinal.toFixed(2)
  );
}

//Exercico 5

let distancia = parseFloat(
  prompt("Digite a distância em quilômetros que deseja percorrer:")
);

// Verifica se a distância é um número válido e positivo
if (isNaN(distancia) || distancia <= 0) {
  alert("Distância inválida. Por favor, insira um valor positivo.");
} else {
  let preco;

  // Calcula o preço da passagem com base na distância
  if (distancia <= 200) {
    preco = distancia * 0.5; // R$0.50 por Km para até 200Km
  } else {
    preco = distancia * 0.45; // R$0.45 por Km para mais de 200Km
  }

  // Exibe o resultado apenas se a distância for válida
  alert(
    "Distância percorrida: " +
      distancia.toFixed(2) +
      " km\n" +
      "Preço da passagem: R$ " +
      preco.toFixed(2)
  );
}

// Exercicio 6

let largura = parseFloat(prompt("Digite a largura do terreno em metros:"));
let comprimento = parseFloat(
  prompt("Digite o comprimento do terreno em metros:")
);

if (isNaN(largura) || largura <= 0 || isNaN(comprimento) || comprimento <= 0) {
  alert(
    "Largura ou comprimento inválido. Por favor, insira valores numéricos positivos."
  );
} else {
  let area = largura * comprimento;
  let classificacao;
  if (area < 100) {
    classificacao = "TERRENO POPULAR";
  } else if (area <= 500) {
    classificacao = "TERRENO MASTER";
  } else {
    classificacao = "TERRENO VIP";
  }
  alert(
    "Área do terreno: " +
      area.toFixed(2) +
      " m²\n" +
      "Classificação: " +
      classificacao
  );
}
