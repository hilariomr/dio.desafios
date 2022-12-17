//Faça um programa que receba a média de um aluno.
//Caso a média seja < 5 imprima "Reprovado"
//Caso a média seja >= 5 e < 7 imprima "Recuperação"
//Caso a média seja >= 7 imprima "Aprovado"

let media = 7;

if (media < 5) {
    console.log('Reprovado')
} else if (media >= 7) {
    console.log('Aprovado')
} else {
    console.log('Recuperação')
}