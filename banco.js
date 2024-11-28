const input = require("prompt-sync")();
const chalk = require('chalk');

console.log(chalk.yellow.bold('G U I   B A N K'));

let nomeCompleto = input(chalk.blue("Digite seu nome completo: "));
let numeroConta = input(chalk.blue("Digite um número de 5 dígitos para a conta: "));

let saldo = 0;
let extrato = [];
let opcao = 0;

console.log(chalk.green("\nConta criada com sucesso!"));
console.log(chalk.yellow(`Titular: ${chalk.white(nomeCompleto)}`));
console.log(chalk.yellow(`Número da conta: ${chalk.white(numeroConta)}`));
console.log(chalk.yellow(`Saldo inicial: ${chalk.white(`R$ ${saldo.toFixed(2)}`)}`));

while (opcao !== 5) {
  console.log(chalk.cyan('\nMENU DE OPERAÇÕES'));
  console.log(chalk.cyan('1 - Saldo'));
  console.log(chalk.cyan('2 - Extrato'));
  console.log(chalk.cyan('3 - Saque'));
  console.log(chalk.cyan('4 - Depósito'));
  console.log(chalk.cyan('5 - Sair'));

  opcao = Number(input(chalk.blue("\nDigite o número da operação desejada: ")));

  if (opcao === 1) {
    console.log(chalk.yellow(`\nSaldo atual: ${chalk.green(`R$ ${saldo.toFixed(2)}`)}`));
  } else if (opcao === 2) {
    console.log(chalk.yellow("\nExtrato:"));
    extrato.forEach(item => console.log(chalk.white(item)));
  } else if (opcao === 3) {
    let valorSaque = Number(input(chalk.blue("Digite o valor do saque: ")));
    if (valorSaque > saldo) {
      console.log(chalk.red("Saldo insuficiente!"));
    } else {
      saldo -= valorSaque;
      extrato.push(`Saque: R$ ${valorSaque.toFixed(2)} - Saldo: R$ ${saldo.toFixed(2)}`);
      console.log(chalk.green(`Saque de R$ ${valorSaque.toFixed(2)} realizado com sucesso.`));
    }
  } else if (opcao === 4) {
    let valorDeposito = Number(input(chalk.blue("Digite o valor do depósito: ")));
    saldo += valorDeposito;
    extrato.push(`Depósito: R$ ${valorDeposito.toFixed(2)} - Saldo: R$ ${saldo.toFixed(2)}`);
    console.log(chalk.green(`Depósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso.`));
  } else if (opcao !== 5) {
    console.log(chalk.red("Opção inválida! Tente novamente."));
  }

  if (opcao !== 5) {
    console.log(chalk.cyan('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    console.log(chalk.yellow(`Nome: ${chalk.white(nomeCompleto)}`));
    console.log(chalk.yellow(`Número da conta: ${chalk.white(numeroConta)}`));
    console.log(chalk.yellow(`Saldo atual: ${chalk.green(`R$ ${saldo.toFixed(2)}`)}`));
    console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'));
  }
}

console.log(chalk.yellow.bold('\nObrigado por usar o GUI BANK!'));
console.log(chalk.yellow(`Nome: ${chalk.white(nomeCompleto)}`));
console.log(chalk.yellow(`Número da conta: ${chalk.white(numeroConta)}`));
console.log(chalk.yellow(`Saldo final: ${chalk.green(`R$ ${saldo.toFixed(2)}`)}`));