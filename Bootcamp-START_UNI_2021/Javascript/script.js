

function load (){
    alert("page load");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


//getElement

function cliclou(){   
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";   
    // alert("Me contrata");
}

function redirecionar(){
    //Para abrir em uma nova aba:
    //window.open("https://www.google.com");
    //Para abrir na mesma aba:
    window.location.href = "https://www.google.com";
}

//funçoes mouse

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar.";   

}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse";
    elemento.innerHTML = "Passe o mouse";
}



//funções
/*function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    
}

validaIdade = prompt("Qual sua idade?");
console.log(validadeIdade(idade));

/


//var d = new Date();
//alert("hoje é" + d.getDate() + "/" + (d.getMonth()+1));


//estruturas de repetição 

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};


var count = 0;
while (count < 5){
    console.log(count);
    count++;
}; */

/*
var idade = prompt("Qual sua idade");
if (idade > 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
};
*/

/*
var frutas = {nome:"maça", cor:"verde"}
console.log(frutas.nome);
alert(frutas.cor);
*/

/*var lista = ["maça", "pera", " laranja"];
lista.push("uva");
lista.pop();
*/
//console.log(lista);
//console.log(lista.toSting());
//console.log(lista.join( " - "));


/*
var nome = "Daniel Tenorio";
var n1 = 5;
var n2 = 3;
var frase = "Feijão por cima do arroz";
alert (nome + " tem " + idade + " anos ");
alert (idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("por cima", "de ladinho"));
*/

