// Adaptação do que foi aprendido na aula de Programação para internet com JavaScript, da DIO.
// 06/11/2021

/*
// Funções
//Em um prompt solicita o nome e em um alert dá as boas vindas nominalmente
function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
var novo_nome = prompt ("Nos diga seu nome")
alert (setReplace("Seja bem vindo(a) nome", "nome" , novo_nome))

function  soma(n1, n2){ //função soma
    return n1 + n2;
}
//prompt armazena valores em string, o parseInt converte em inteiro
var nm1 = parseInt(prompt  ("Digite um número")) // recebe primeiro valor
var nm2 = parseInt(prompt ("Digite outro número")) //recebe segundo valor
alert (soma(nm1, nm2)) // execulta a function e imprime o resultado em um pop-up

function concatena(n1, n2){ // função concatena
    return n1 + " " + n2;
}
var nm = prompt ("Digite o seu nome?")
var sn = prompt ("Digite o seu sobrenome")
alert (concatena(nm, sn))

// DATE
var d = new Date();
alert(d);           // retorna no pop-up informações de data e hora atual
//alert(d.getDay());

// Laço de Repetição For
var count;
for(count=1; count <=12; count++){      // estabelece o parâmetro para execultar o for
    alert(count);
}

// Laço de Repetição While 
var count = 0;              // estabelece o valor inicial da variável
while (count < 11){         // estabelece um limite para o "enquanto"
    console.log(count);     
    count = count + 2;      // estabelece o parâmetro para repetir o "enquanto"
//    count ++;      // estabelece o parâmetro para repetir o "enquanto"
};

// Condicionais
var idade = prompt("Qual sua idade? "); // apresenta em um pop-up com a pergunta e a área de resposta, recebe a resposta
if (idade>= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

// Lista de Discionários
var nordeste = [{sigla:"pe", capital:"recife"}, {sigla:"pb", capital:"joão pessoa"}, {sigla:"al", capital:"maceió"}] //cria uma lista de dicionários
console.log(nordeste); //retorna o discionário completo
alert(nordeste[2].sigla); // imprime no pop-up o elemento específico, do discionário que está na posição x da lista

// Discionário
var nordeste = {sigla:"pe", capital:"recife"} //cria um dicionário
console.log(nordeste); //retorna o discionário completo
console.log(nordeste.capital); //retorna o valor do elemento x de um determinado dicionário
alert(nordeste.sigla); //imprime no pop-up o valor do elemento x de um determinado dicionário

// Listas / Array
var idioma = ["english", "português", "español", "italiano", "français"]; //cria uma lista - array
idioma.pop(); //exclui o valor da ultima posição da lista
idioma.push("mandarin"); //adiciona o valor à lista
console.log(idioma[3]); //retorna uma posição na lista
console.log(idioma); //retorna toda a lista
console.log(idioma.length); //retorna o tamanho a lista
console.log(idioma.toString()); //retorna os valores da lista transformados em string
console.log(idioma.join(" - ")); // transformar os valores da lista em string e usa como separador o item informado
console.log(idioma.reverse()); //retorna a lista em ordem inversa
alert(idioma[2]); //imprime no pop-up o valor da posição x da lista

// Primeiro contato com JavaScript
var frase = "Primeiras linhas no JavaScript";
var ano = 2021;
alert("As " + frase + " em " + ano); //pop-up ao abrir a página
console.log(frase);
console.log(ano);
console.log(frase.replace("Primeiras linhas", "Primeira de muitas")); //troca uma string, ou seguimento da string, selecionada pela nova string informada.
console.log(frase.toUpperCase()); //transforma toda a var em MAIÚSCULA
console.log(frase.toLowerCase()); //transforma toda a var em minúscula
*/
