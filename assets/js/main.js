//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.


emptyArray = [];
arraySum = 0;

function fiftyElements(){
  while (arraySum < 50){
    let userNum = parseInt(prompt('write a number'));
    emptyArray.push(userNum);
    arraySum += userNum;
    console.log(emptyArray);
  }
}


//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

sumOfFiveNumbers = 0;
function sumOfFive(){
    
    for (i = 0; i<5; i++){
        let numChosen = parseInt(prompt("Write a number"));
        sumOfFiveNumbers += numChosen;    
    }
    document.getElementById("sumOfFiveNums").innerHTML = sumOfFiveNumbers;
}


//Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array,
//ognuno formato da 10 numeri casuali da 1 a 100.
//Ogni volta che ne crei uno, stampalo.

function howManyArr(){
    let n = parseInt(document.getElementById('numberOfArrays').value);
    for (i=0; i<n; i++){
        var newArray = new Array();
        
        for (i=0; i<10; i++){
            newArray.push(Math.round(Math.random() * 100));
            
            
        }
        
    }
    document.getElementById("numOfArr").innerHTML += `<li>${newArray}</li>`;
}

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//Interrompi il ciclo appena il nome è stato trovato.


list = ['Francesco', 'Francesca', 'Andrea','Emma']
function inTheList(){
    let name = document.getElementById('numberOfArrays').value;
    
}